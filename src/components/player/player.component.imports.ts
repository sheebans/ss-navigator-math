import { CollectionPlayerOverviewComponent } from './collection-player-overview/collection-player-overview';
import { CollectionPlayerComponent } from './collection-player/collection-player';
import { AssessmentPlayerComponent } from './assessment-player/assessment-player';
import { CollectionPlaylistComponent } from './collection-playlist/collection-playlist';
import { ContentPlayerComponent } from './content-player.component';
import { AssessmentPlayerOverviewComponent } from './assessment-player-overview/assessment-player-overview';
import { AssessmentPlaylistComponent } from './assessment-playlist/assessment-playlist';
import { WebpageFormatComponent } from './webpage-format/webpage-format';
import { PdfFormatComponent } from './pdf-format/pdf-format';
import { YoutubeVideoFormatComponent } from './youtube-video-format/youtube-video-format';
import { VimeoVideoFormatComponent } from './vimeo-video-format/vimeo-video-format';
import { TrueOrFalseFormatComponent } from './true-or-false-format/true-or-false-format';
import { MultipleChoiceFormatComponent } from './multiple-choice-format/multiple-choice-format';
import { FillInTheBlankFormatComponent } from './fill-in-the-blank-format/fill-in-the-blank-format';
import { MultipleAnswerFormatComponent } from './multiple-answer-format/multiple-answer-format';
import { DragAndDropFormatComponent } from './drag-and-drop-format/drag-and-drop-format';
import { HighlightTextFormatComponent } from './highlight-text-format/highlight-text-format';
import { MultipleSelectImageFormatComponent } from './multiple-select-image-format/multiple-select-image-format';
import { MultipleSelectTextFormatComponent } from './multiple-select-text-format/multiple-select-text-format';
import { FreeResponseFormatComponent } from './free-response-format/free-response-format';
import { ImageFormatComponent } from './image-format/image-format';
import { ContentInfoPanelComponent } from './content-info-panel/content-info-panel';
import { CollectionPlaylistPanelComponent } from './collection-playlist-panel/collection-playlist-panel';
import { QuestionInfoPanelComponent } from './question-info-panel/question-info-panel';
import { QuestionPlaylistPanelComponent } from './question-playlist-panel/question-playlist-panel';
import { SmileyComponent } from './smiley/smiley';
import { AssessmentBidirectionalPlaylistComponent } from './assessment-playlist/assessment-bidirectional-playlist/assessment-bidirectional-playlist';
import { AssessmentForwardNavigationPlaylistComponent } from './assessment-playlist/assessment-forward-navigation-playlist/assessment-forward-navigation-playlist';
import { CollectionReportOverviewComponent } from './collection-report-overview/collection-report-overview';
import { AssessmentReportOverviewComponent } from './assessment-report-overview/assessment-report-overview';
export const PLAYER_ENTRY_COMPONENTS = [
  YoutubeVideoFormatComponent,
  VimeoVideoFormatComponent,
  WebpageFormatComponent,
  PdfFormatComponent,
  ImageFormatComponent,
  TrueOrFalseFormatComponent,
  MultipleChoiceFormatComponent,
  FillInTheBlankFormatComponent,
  MultipleAnswerFormatComponent,
  DragAndDropFormatComponent,
  HighlightTextFormatComponent,
  MultipleSelectImageFormatComponent,
  MultipleSelectTextFormatComponent,
  FreeResponseFormatComponent,
  CollectionPlaylistPanelComponent,
  QuestionPlaylistPanelComponent,
  AssessmentBidirectionalPlaylistComponent,
  AssessmentForwardNavigationPlaylistComponent,
  CollectionReportOverviewComponent,
  AssessmentReportOverviewComponent
];

export const PLAYER_COMPONENTS = [
  CollectionPlayerOverviewComponent,
  CollectionPlayerComponent,
  AssessmentPlayerOverviewComponent,
  AssessmentPlayerComponent,
  ContentPlayerComponent,
  CollectionPlaylistComponent,
  AssessmentPlaylistComponent,
  ContentInfoPanelComponent,
  QuestionInfoPanelComponent,
  CollectionPlaylistPanelComponent,
  QuestionPlaylistPanelComponent,
  SmileyComponent,
  PLAYER_ENTRY_COMPONENTS
];

export const PLAYER_CONTENT_FORMAT_MAPPER: object = {
  webpage: WebpageFormatComponent,
  youtube: YoutubeVideoFormatComponent,
  vimeo: VimeoVideoFormatComponent,
  pdf: PdfFormatComponent,
  image: ImageFormatComponent,
  true_false_question: TrueOrFalseFormatComponent,
  multiple_choice_question: MultipleChoiceFormatComponent,
  fill_in_the_blank_question: FillInTheBlankFormatComponent,
  multiple_answer_question: MultipleAnswerFormatComponent,
  hot_text_reorder_question: DragAndDropFormatComponent,
  hot_text_highlight_question: HighlightTextFormatComponent,
  hot_spot_image_question: MultipleSelectImageFormatComponent,
  hot_spot_text_question: MultipleSelectTextFormatComponent,
  open_ended_question: FreeResponseFormatComponent
};
