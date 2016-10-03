import {Component}  from 'angular2/core';
import {Video} from './video';

@Component({
	selector: 'playlist',
	templateUrl: 'app/ts/playlist.component.html',
	inputs: ['videoes']
})

export class PlaylistComponent {
	clickMessage = '';

	onSelect(vid:Video) {
		console.log(JSON.stringify(vid.videoCode));
			
		this.clickMessage = vid.videoCode;
	}
}