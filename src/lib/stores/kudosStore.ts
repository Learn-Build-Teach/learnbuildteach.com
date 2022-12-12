import { supabase } from '$lib/helpers/supabase';
import { KudoCategory, type KudoWithUsernames } from '$src/types/supabase';
import { writable } from 'svelte/store';

export const kudosByMonth = writable<any[]>();
let kudosByMonthLoaded = false;

export const loadKudosByMonth = async () => {
	if (kudosByMonthLoaded) return;

	const now = new Date();
	const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	const { data, error } = await supabase
		.from('Kudo')
		.select(
			`id, createdAt, category, description, points, receiverId, giverId, multiplier,
                receiver:receiverId(username),
                giver:giverId(username)
            `
		)
		.gt('createdAt', firstDayOfMonth.toISOString())
		.order('createdAt', { ascending: false });
	if (error) {
		return console.error('failed to load kudos');
	}
	kudosByMonth.set(data);
	kudosByMonthLoaded = true;
};

export const getKudosLeaderboard = (kudosWithUsernames: KudoWithUsernames[]) => {
	const leaders = kudosWithUsernames.reduce((acc: Map<string, Leader>, record: any) => {
		//Filter records without a username
		if (!record.receiver.username) return acc;

		if (acc.has(record.receiverId)) {
			const prevValue = acc.get(record.receiverId);
			acc.set(record.receiverId, {
				id: record.receiverId,
				username: record.receiver.username,
				totalPoints: (prevValue?.totalPoints || 0) + record.points,
				learnPoints:
					record.category === KudoCategory.LEARN
						? (prevValue?.learnPoints || 0) + record.points
						: prevValue?.learnPoints || 0,
				buildPoints:
					record.category === KudoCategory.BUILD
						? (prevValue?.buildPoints || 0) + record.points
						: prevValue?.buildPoints || 0,
				teachPoints:
					record.category === KudoCategory.TEACH
						? (prevValue?.teachPoints || 0) + record.points
						: prevValue?.teachPoints || 0
			});
		} else {
			acc.set(record.receiverId, {
				id: record.receiverId,
				username: record.receiver.username,
				totalPoints: record.points,
				learnPoints: record.category === 'LEARN' ? record.points : 0,
				buildPoints: record.category === 'BUILD' ? record.points : 0,
				teachPoints: record.category === 'TEACH' ? record.points : 0
			});
		}
		return acc;
	}, new Map<string, Leader>());
	return [...leaders.values()].sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 10);
};

export interface Leader {
	username: string;
	totalPoints: number;
	learnPoints: number;
	buildPoints: number;
	teachPoints: number;
	id: string;
}
