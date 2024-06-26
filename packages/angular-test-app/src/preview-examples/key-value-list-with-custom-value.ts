/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListWithCustomValue {}
