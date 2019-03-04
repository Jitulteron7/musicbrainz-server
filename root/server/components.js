/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

module.exports = {
  /*
   * Any server-rendered page referenced via component_path in the
   * stash must be listed here.
   */
  'account/applications/Edit': require('../account/applications/Edit'),
  'account/applications/Index': require('../account/applications/Index'),
  'account/applications/Register': require('../account/applications/Register'),
  'account/applications/Remove': require('../account/applications/Remove'),
  'account/applications/RevokeAccess': require('../account/applications/RevokeAccess'),
  'account/Donation': require('../account/Donation'),
  'account/EmailVerificationStatus': require('../account/EmailVerificationStatus'),
  'account/LostPassword': require('../account/LostPassword'),
  'account/LostPasswordSent': require('../account/LostPasswordSent'),
  'account/LostUsername': require('../account/LostUsername'),
  'account/LostUsernameSent': require('../account/LostUsernameSent'),
  'account/Preferences': require('../account/Preferences'),
  'account/PreferencesSaved': require('../account/PreferencesSaved'),
  'account/ResetPasswordStatus': require('../account/ResetPasswordStatus'),
  'account/sso/DiscourseRegistered': require('../account/sso/DiscourseRegistered'),
  'account/sso/DiscourseUnconfirmedEmailAddress': require('../account/sso/DiscourseUnconfirmedEmailAddress'),
  'admin/EditBanner': require('../admin/EditBanner'),
  'area/AreaEvents': require('../area/AreaEvents'),
  'area/AreaLabels': require('../area/AreaLabels'),
  'area/NotFound': require('../area/NotFound'),
  'artist/ArtistEvents': require('../artist/ArtistEvents'),
  'artist/CannotSplit': require('../artist/CannotSplit'),
  'artist/Merge': require('../artist/Merge'),
  'artist/NotFound': require('../artist/NotFound'),
  'artist/SpecialPurpose': require('../artist/SpecialPurpose'),
  'cdtoc/NotFound': require('../cdtoc/NotFound'),
  'collection/NotFound': require('../collection/NotFound'),
  'edit/NotFound': require('../edit/NotFound'),
  'entity/Aliases': require('../entity/Aliases'),
  'entity/Details': require('../entity/Details'),
  'entity/Subscribers': require('../entity/Subscribers'),
  'entity/Tags': require('../entity/Tags'),
  'elections/Index': require('../elections/Index'),
  'elections/Nominate': require('../elections/Nominate'),
  'elections/NotFound': require('../elections/NotFound'),
  'elections/Show': require('../elections/Show'),
  'event/NotFound': require('../event/NotFound'),
  'genre/List': require('../genre/List'),
  'instrument/List': require('../instrument/List'),
  'instrument/NotFound': require('../instrument/NotFound'),
  'isrc/Index': require('../isrc/Index'),
  'isrc/NotFound': require('../isrc/NotFound'),
  'iswc/Index': require('../iswc/Index'),
  'iswc/NotFound': require('../iswc/NotFound'),
  'label/NotFound': require('../label/NotFound'),
  'main/404': require('../main/404'),
  'main/index': require('../main/index'),
  'otherlookup/NotFound': require('../otherlookup/NotFound'),
  'place/NotFound': require('../place/NotFound'),
  'place/PlaceEvents': require('../place/PlaceEvents'),
  'recording/NotFound': require('../recording/NotFound'),
  'relationship/linkattributetype/NotFound': require('../relationship/linkattributetype/NotFound'),
  'release/NotFound': require('../release/NotFound'),
  'release_group/NotFound': require('../release_group/NotFound'),
  'report/AnnotationsArtists': require('../report/AnnotationsArtists'),
  'report/AnnotationsLabels': require('../report/AnnotationsLabels'),
  'report/AnnotationsReleaseGroups': require('../report/AnnotationsReleaseGroups'),
  'report/ArtistsContainingDisambiguationComments': require('../report/ArtistsContainingDisambiguationComments'),
  'report/ArtistsDisambiguationSameName': require('../report/ArtistsDisambiguationSameName'),
  'report/ArtistsThatMayBeGroups': require('../report/ArtistsThatMayBeGroups'),
  'report/ArtistsThatMayBePersons': require('../report/ArtistsThatMayBePersons'),
  'report/ArtistsWithMultipleOccurrencesInArtistCredits': require('../report/ArtistsWithMultipleOccurrencesInArtistCredits'),
  'report/ArtistsWithNoSubscribers': require('../report/ArtistsWithNoSubscribers'),
  'report/CollaborationRelationships': require('../report/CollaborationRelationships'),
  'report/DeprecatedRelationshipArtists': require('../report/DeprecatedRelationshipArtists'),
  'report/DeprecatedRelationshipLabels': require('../report/DeprecatedRelationshipLabels'),
  'report/DeprecatedRelationshipReleaseGroups': require('../report/DeprecatedRelationshipReleaseGroups'),
  'report/DeprecatedRelationshipUrls': require('../report/DeprecatedRelationshipUrls'),
  'report/DiscogsLinksWithMultipleArtists': require('../report/DiscogsLinksWithMultipleArtists'),
  'report/DiscogsLinksWithMultipleLabels': require('../report/DiscogsLinksWithMultipleLabels'),
  'report/DiscogsLinksWithMultipleReleaseGroups': require('../report/DiscogsLinksWithMultipleReleaseGroups'),
  'report/DuplicateArtists': require('../report/DuplicateArtists'),
  'report/DuplicateEvents': require('../report/DuplicateEvents'),
  'report/DuplicateRelationshipsArtists': require('../report/DuplicateRelationshipsArtists'),
  'report/DuplicateRelationshipsLabels': require('../report/DuplicateRelationshipsLabels'),
  'report/DuplicateRelationshipsReleaseGroups': require('../report/DuplicateRelationshipsReleaseGroups'),
  'report/DuplicateReleaseGroups': require('../report/DuplicateReleaseGroups'),
  'report/EventSequenceNotInSeries': require('../report/EventSequenceNotInSeries'),
  'report/FeaturingReleaseGroups': require('../report/FeaturingReleaseGroups'),
  'report/InstrumentsWithoutAnImage': require('../report/InstrumentsWithoutAnImage'),
  'report/IsrcsWithManyRecordings': require('../report/IsrcsWithManyRecordings'),
  'report/IswcsWithManyWorks': require('../report/IswcsWithManyWorks'),
  'report/LabelsDisambiguationSameName': require('../report/LabelsDisambiguationSameName'),
  'report/LimitedEditors': require('../report/LimitedEditors'),
  'report/PossibleCollaborations': require('../report/PossibleCollaborations'),
  'report/ReleaseGroupsWithoutVACredit': require('../report/ReleaseGroupsWithoutVACredit'),
  'report/ReleaseGroupsWithoutVALink': require('../report/ReleaseGroupsWithoutVALink'),
  'report/ReportNotAvailable': require('../report/ReportNotAvailable'),
  'report/ReportsIndex': require('../report/ReportsIndex'),
  'report/SetInDifferentRG': require('../report/SetInDifferentRG'),
  'search/components/AnnotationResults': require('../search/components/AnnotationResults'),
  'search/components/AreaResults': require('../search/components/AreaResults'),
  'search/components/ArtistResults': require('../search/components/ArtistResults'),
  'search/components/CDStubResults': require('../search/components/CDStubResults'),
  'search/components/DocResults': require('../search/components/DocResults'),
  'search/components/EditorResults': require('../search/components/EditorResults'),
  'search/components/EventResults': require('../search/components/EventResults'),
  'search/components/InstrumentResults': require('../search/components/InstrumentResults'),
  'search/components/LabelResults': require('../search/components/LabelResults'),
  'search/components/PaginatedSearchResults': require('../search/components/PaginatedSearchResults'),
  'search/components/PlaceResults': require('../search/components/PlaceResults'),
  'search/components/RecordingResults': require('../search/components/RecordingResults'),
  'search/components/ReleaseGroupResults': require('../search/components/ReleaseGroupResults'),
  'search/components/ReleaseResults': require('../search/components/ReleaseResults'),
  'search/components/SeriesResults': require('../search/components/SeriesResults'),
  'search/components/TagResults': require('../search/components/TagResults'),
  'search/components/WorkResults': require('../search/components/WorkResults'),
  'series/NotFound': require('../series/NotFound'),
  'statistics/CoverArt': require('../statistics/CoverArt'),
  'statistics/Edits': require('../statistics/Edits'),
  'statistics/Index': require('../statistics/Index'),
  'statistics/LanguagesScripts': require('../statistics/LanguagesScripts'),
  'statistics/Relationships': require('../statistics/Relationships'),
  'statistics/NoStatistics': require('../statistics/NoStatistics'),
  'tag/EntityList': require('../tag/EntityList'),
  'tag/NotFound': require('../tag/NotFound'),
  'tag/TagCloud': require('../tag/TagCloud'),
  'tag/TagIndex': require('../tag/TagIndex'),
  'taglookup/ArtistResults': require('../taglookup/ArtistResults'),
  'taglookup/Index': require('../taglookup/Index'),
  'taglookup/NotFound': require('../taglookup/NotFound'),
  'taglookup/RecordingResults': require('../taglookup/RecordingResults'),
  'taglookup/ReleaseResults': require('../taglookup/ReleaseResults'),
  'taglookup/Results': require('../taglookup/Results'),
  'track/NotFound': require('../track/NotFound'),
  'url/NotFound': require('../url/NotFound'),
  'user/NotFound': require('../user/NotFound'),
  'user/PrivilegedUsers': require('../user/PrivilegedUsers'),
  'work/NotFound': require('../work/NotFound'),

  /*
   * XXX Components included via React.embed in our TT templates
   * must be listed here. These no longer need to be present once the
   * pages that embed them are fully converted to React.
   */
  'area/AreaHeader': require('../area/AreaHeader'),
  'artist/ArtistHeader': require('../artist/ArtistHeader'),
  'collection/CollectionHeader': require('../collection/CollectionHeader'),
  'components/Aliases': require('../components/Aliases'),
  'components/EventsList': require('../components/EventsList'),
  'components/ExpirationTime': require('../components/ExpirationTime'),
  'components/LabelsList': require('../components/LabelsList'),
  'components/UserAccountTabs': require('../components/UserAccountTabs'),
  'edit/components/EditSidebar': require('../edit/components/EditSidebar'),
  'edit/components/EditSummary': require('../edit/components/EditSummary'),
  'edit/components/Vote': require('../edit/components/Vote'),
  'edit/details/AddAnnotation': require('../edit/details/AddAnnotation'),
  'edit/details/AddArea': require('../edit/details/AddArea'),
  'edit/details/AddArtist': require('../edit/details/AddArtist'),
  'edit/details/AddEvent': require('../edit/details/AddEvent'),
  'event/EventHeader': require('../event/EventHeader'),
  'instrument/InstrumentHeader': require('../instrument/InstrumentHeader'),
  'label/LabelHeader': require('../label/LabelHeader'),
  'layout/components/Head': require('../layout/components/Head'),
  'layout/components/Header': require('../layout/components/Header'),
  'layout/components/sidebar/AreaSidebar': require('../layout/components/sidebar/AreaSidebar'),
  'layout/components/sidebar/ArtistSidebar': require('../layout/components/sidebar/ArtistSidebar'),
  'layout/components/sidebar/CDStubSidebar': require('../layout/components/sidebar/CDStubSidebar'),
  'layout/components/sidebar/CollectionSidebar': require('../layout/components/sidebar/CollectionSidebar'),
  'layout/components/sidebar/EventSidebar': require('../layout/components/sidebar/EventSidebar'),
  'layout/components/sidebar/InstrumentSidebar': require('../layout/components/sidebar/InstrumentSidebar'),
  'layout/components/sidebar/LabelSidebar': require('../layout/components/sidebar/LabelSidebar'),
  'layout/components/sidebar/PlaceSidebar': require('../layout/components/sidebar/PlaceSidebar'),
  'layout/components/sidebar/RecordingSidebar': require('../layout/components/sidebar/RecordingSidebar'),
  'layout/components/sidebar/ReleaseGroupSidebar': require('../layout/components/sidebar/ReleaseGroupSidebar'),
  'layout/components/sidebar/ReleaseSidebar': require('../layout/components/sidebar/ReleaseSidebar'),
  'layout/components/sidebar/SeriesSidebar': require('../layout/components/sidebar/SeriesSidebar'),
  'layout/components/sidebar/UrlSidebar': require('../layout/components/sidebar/UrlSidebar'),
  'layout/components/sidebar/WorkSidebar': require('../layout/components/sidebar/WorkSidebar'),
  'place/PlaceHeader': require('../place/PlaceHeader'),
  'recording/RecordingHeader': require('../recording/RecordingHeader'),
  'release/ReleaseHeader': require('../release/ReleaseHeader'),
  'release_group/ReleaseGroupHeader': require('../release_group/ReleaseGroupHeader'),
  'series/SeriesHeader': require('../series/SeriesHeader'),
  'static/scripts/common/components/Annotation': require('../static/scripts/common/components/Annotation'),
  'static/scripts/common/components/CritiqueBrainzReview': require('../static/scripts/common/components/CritiqueBrainzReview'),
  'static/scripts/common/components/FilterIcon': require('../static/scripts/common/components/FilterIcon'),
  'static/scripts/common/components/SearchIcon': require('../static/scripts/common/components/SearchIcon'),
  'static/scripts/common/components/TaggerIcon': require('../static/scripts/common/components/TaggerIcon'),
  'static/scripts/common/components/WikipediaExtract': require('../static/scripts/common/components/WikipediaExtract'),
  'static/scripts/edit/components/AddIcon': require('../static/scripts/edit/components/AddIcon'),
  'static/scripts/edit/components/GuessCaseIcon': require('../static/scripts/edit/components/GuessCaseIcon'),
  'static/scripts/edit/components/InformationIcon': require('../static/scripts/edit/components/InformationIcon'),
  'static/scripts/edit/components/WarningIcon': require('../static/scripts/edit/components/WarningIcon'),
  'url/UrlHeader': require('../url/UrlHeader'),
  'work/WorkHeader': require('../work/WorkHeader'),
};
