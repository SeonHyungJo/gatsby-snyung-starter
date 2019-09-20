import React from 'react'

import { sns } from 'data/nameCard'
import EmailIconItem from './email-icon'
import FacebookIconItem from './facebook-icon'
import GithubIconItem from './github-icon'
import InstagramIconItem from './instagram-icon'
import LinkedinIconItem from './linkedin-icon'
import TwitterIconItem from './twitter-icon'
import YoutubeIconItem from './youtube-icon'



export const EmailIcon = () => <EmailIconItem href={`mailto:${sns.email}`} />
export const FacebookIcon = () => <FacebookIconItem href={`${sns.facebook}`} />
export const GithubIcon = () => <GithubIconItem href={`${sns.github}`} />
export const InstagramIcon = () => <InstagramIconItem href={`${sns.instagram}`} />
export const LinkedinIcon = () => <LinkedinIconItem href={`${sns.linkedin}`} />
export const TwitterIcon = () => <TwitterIconItem href={`${sns.twitter}`} />
export const YoutubeIcon = () => <YoutubeIconItem href={`${sns.youtube}`} />
