import type { ImgHTMLAttributes } from 'vue'
import type Writeup from './Writeup'

export default interface BlogPost {
    title?: string
    contentSections?: Writeup[]
    image?: ImgHTMLAttributes['src']
    dateCreated?: string
    approximatedMinRead?: number
    numberOfViewers?: number
    numberOfTimesShared?: number
}
