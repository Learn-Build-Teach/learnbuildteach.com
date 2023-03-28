import { H } from 'highlight.run';
import { PUBLIC_HIGHLIGHT_PROJECT_ID, PUBLIC_APP_DOMAIN } from '$env/static/public';

H.init(PUBLIC_HIGHLIGHT_PROJECT_ID, {
	environment: 'production',
	version: 'commit:abcdefg12345',
	tracingOrigins: [PUBLIC_APP_DOMAIN],
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		urlBlocklist: [
			// insert urls you don't want to record here
		]
	}
});
