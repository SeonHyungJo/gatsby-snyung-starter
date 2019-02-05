import React from 'react'
import renderer from 'react-test-renderer'

import { LinkButton } from '../ButtonComponent'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LinkButton to="https://gatsby-sseon-starter.netlify.com/">
          Button
        </LinkButton>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
