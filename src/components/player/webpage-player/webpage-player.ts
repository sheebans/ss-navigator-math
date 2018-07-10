import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'webpage-player',
  templateUrl: 'webpage-player.html'
})
export class WebpagePlayerComponent {
  content: any = {
    id: 'e532f7d8-f45b-41b8-9e37-68588447fad1',
    title: 'How Does SONAR work?',
    url: 'http://cdn.gooru.org/5894724c-130f-4a66-91b2-a7e83f65f38c.pdf',
    creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
    original_creator_id: '07a3c45d-08b0-4e2e-b3de-04e5afe7d22d',
    publish_date: null,
    content_format: 'resource',
    content_subformat: 'webpage_resource',
    answer: null,
    metadata: null,
    narration:
      'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.',
    taxonomy: {},
    hint_explanation_detail: null,
    thumbnail: null,
    sequence_id: 4,
    is_copyright_owner: false,
    visible_on_profile: true,
    display_guide: {},
    description:
      'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.'
  };
  trustedWebsiteUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    this.trustedWebsiteUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.content.url
    );
  }

  onWebpageLoad(): void {
    console.log('webpage loaded Successfully!!!!');
  }
}
