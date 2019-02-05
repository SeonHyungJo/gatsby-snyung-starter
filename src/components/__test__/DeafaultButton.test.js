import React from 'react'
import renderer from 'react-test-renderer'

import { DefaultButton } from '../ButtonComponent'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DefaultButton>Button</DefaultButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
