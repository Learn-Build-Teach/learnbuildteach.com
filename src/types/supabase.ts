export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			DiscordUser: {
				Row: {
					id: string;
					createdAt: string | null;
					username: string | null;
					github: string | null;
					twitter: string | null;
					numMessages: number;
					xp: number;
				};
				Insert: {
					id?: string;
					createdAt?: string | null;
					username?: string | null;
					github?: string | null;
					twitter?: string | null;
					numMessages?: number;
					xp?: number;
				};
				Update: {
					id?: string;
					createdAt?: string | null;
					username?: string | null;
					github?: string | null;
					twitter?: string | null;
					numMessages?: number;
					xp?: number;
				};
			};
			Kudo: {
				Row: {
					id: string;
					createdAt: string | null;
					category: string | null;
					description: string | null;
					points: number | null;
					receiver: string;
					giver: string | null;
					multiplier: number;
				};
				Insert: {
					id: string;
					createdAt?: string | null;
					category?: string | null;
					description?: string | null;
					points?: number | null;
					receiver: string;
					giver?: string | null;
					multiplier?: number;
				};
				Update: {
					id?: string;
					createdAt?: string | null;
					category?: string | null;
					description?: string | null;
					points?: number | null;
					receiver?: string;
					giver?: string | null;
					multiplier?: number;
				};
			};
			Share: {
				Row: {
					id: string;
					createdAt: string | null;
					link: string | null;
					title: string | null;
					description: string | null;
					imageUrl: string | null;
					tweetable: boolean | null;
					emailable: boolean | null;
					tweeted: boolean | null;
					emailed: boolean | null;
					userId: string;
				};
				Insert: {
					id?: string;
					createdAt?: string | null;
					link?: string | null;
					title?: string | null;
					description?: string | null;
					imageUrl?: string | null;
					tweetable?: boolean | null;
					emailable?: boolean | null;
					tweeted?: boolean | null;
					emailed?: boolean | null;
					userId: string;
				};
				Update: {
					id?: string;
					createdAt?: string | null;
					link?: string | null;
					title?: string | null;
					description?: string | null;
					imageUrl?: string | null;
					tweetable?: boolean | null;
					emailable?: boolean | null;
					tweeted?: boolean | null;
					emailed?: boolean | null;
					userId?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
