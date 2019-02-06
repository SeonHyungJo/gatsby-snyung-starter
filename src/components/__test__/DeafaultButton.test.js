import React from 'react'
import renderer from 'react-test-renderer'

import { DefaultButton } from '../ButtonComponent'

describe('DefaultButton', () => {
  it('Render Default Option', () => {
    const defaultButton = renderer
      .create(<DefaultButton>Button</DefaultButton>)
      .toJSON()

    expect(defaultButton).toMatchSnapshot()
  })

  it('Render To Option', () => {
    const defaultButton = renderer
      .create(<DefaultButton to={'http://www.naver.com'}>To Btn</DefaultButton>)
      .toJSON()

    expect(defaultButton).toMatchSnapshot()
  })

  it('Render customClass Option', () => {
    const defaultButton = renderer
      .create(
        <DefaultButton customClass={'snsBtn'}>CustomClass Btn</DefaultButton>
      )
      .toJSON()

    expect(defaultButton).toMatchSnapshot()
  })
})
