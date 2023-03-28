import { H } from 'highlight.run';
import { PUBLIC_HIGHLIGHT_PROJECT_ID } from '$env/static/public';

H.init(PUBLIC_HIGHLIGHT_PROJECT_ID, {
	environment: 'production',
	version: 'commit:abcdefg12345',
	tracingOrigins: ['localhost'],
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		urlBlocklist: [
			// insert urls you don't want to record here
		]
	}
});
