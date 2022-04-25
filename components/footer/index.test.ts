/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import './index.js';

describe('footer', () => {
  it('loads default content', async () => {
    const short_content = [
      {
        title: 'Learn',
        items: [
          {
            label: 'Textbook',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Tutorials',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Videos',
            url: 'https://qiskit.org/textbook-beta',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Events',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Advocates',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Code of conduct',
            url: 'https://qiskit.org/textbook-beta',
          },
        ],
      },
      {
        title: 'Support',
        items: [
          {
            label: 'Github',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Stack Exchange',
            url: 'https://qiskit.org/textbook-beta',
          },
          {
            label: 'Documentation',
            url: 'https://qiskit.org/textbook-beta',
          },
        ],
      },
    ];
    const el = await fixture(
      html`<qiskit-footer .info=${short_content}></qiskit-footer>`
    );

    expect(el.shadowRoot?.hasChildNodes()).to.be.equal(true);
    expect(el.shadowRoot?.innerHTML).to.contains('<footer>');
  });
});
