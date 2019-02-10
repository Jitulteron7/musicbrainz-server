/*
 * @flow
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import React from 'react';

import {l, ln} from '../static/scripts/common/i18n';
import EntityHeader from '../components/EntityHeader';
import ArtistCreditLink from '../static/scripts/common/components/ArtistCreditLink';
import EntityLink from '../static/scripts/common/components/EntityLink';
import TaggerIcon from '../static/scripts/common/components/TaggerIcon';
import {artistCreditFromArray} from '../static/scripts/common/immutable-entities';
import bracketed from '../static/scripts/common/utility/bracketed';

type Props = {|
  page: string,
  release: ReleaseT,
|};

const ReleaseHeader = ({release, page}: Props) => {
  const artistCredit = (
    <ArtistCreditLink
      artistCredit={artistCreditFromArray(release.artistCredit)}
    />
  );
  const rgLink = release.releaseGroup
    ? ln(
      'see all versions of this release, {count} available',
      'see all versions of this release, {count} available',
      release.releaseGroup.release_count,
      {count: release.releaseGroup.release_count},
    ) : null;
  const subHeading = (
    <>
      {l('Release by {artist}', {
        artist: artistCredit,
      })}
      {' '}
      {release.releaseGroup ? (
        <span className="small">
          {bracketed(
            <EntityLink
              content={rgLink}
              entity={release.releaseGroup}
            />,
          )}
        </span>
      ) : null}
    </>
  );
  return (
    <EntityHeader
      entity={release}
      headerClass="releaseheader"
      page={page}
      preHeader={<TaggerIcon entity={release} />}
      subHeading={subHeading}
    />
  );
};

export default ReleaseHeader;
