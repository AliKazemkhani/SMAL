import playIcon from '../assets/images/4k144.svg'
import hdmiIcon from '../assets/images/hdmi21.svg'
import hdrIcon from '../assets/images/hdr10.svg'
import plugNPlayIcon from '../assets/images/plugnplay.svg'
import softwareCompatibleIcon from '../assets/images/softwarecompatible.svg'
import variableRefreshRateIcon from '../assets/images/variablerefreshrate.svg'
import { type FeatureItem } from '../types/features'

export const items: FeatureItem[] = [
  {
    id: 1,
    icon: playIcon,
    title: 'features.play.title',
    subtitle: 'features.play.subtitle',
  },
  {
    id: 2,
    icon: hdmiIcon,
    title: 'features.hdmi.title',
    subtitle: 'features.hdmi.subtitle',
  },
  {
    id: 3,
    icon: plugNPlayIcon,
    title: 'features.plugNplay.title',
    subtitle: 'features.plugNplay.subtitle',
  },
  {
    id: 4,
    icon: hdrIcon,
    title: 'features.hdr.title',
    subtitle: 'features.hdr.subtitle',
  },
  {
    id: 5,
    icon: variableRefreshRateIcon,
    title: 'features.variableRefreshRate.title',
    subtitle: 'features.variableRefreshRate.subtitle',
  },
  {
    id: 6,
    icon: softwareCompatibleIcon,
    title: 'features.softwareCompatible.title',
    subtitle: 'features.softwareCompatible.subtitle',
  },
]
