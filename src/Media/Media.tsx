/**
 * Copyright (c) 2017-present Jared Palmer
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { SharedRenderProps } from '../types';
const M = require('react-media');

export const Media: React.SFC<SharedRenderProps<MediaProps>> = M;

export interface MediaProps {
  matches: boolean;
}
