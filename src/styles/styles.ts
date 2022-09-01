// COLOURS
export const typographyPrimary = 'text-slate-800 dark:text-white'
export const typographySecondary = 'text-slate-500 dark:text-slate-400'
export const typographyPrimaryInverted = 'text-white'
export const hoverTypographyPrimaryInverted = 'hover:text-white dark:hover:text-white'
export const typographyAccent = 'text-indigo-600 dark:text-indigo-400'
export const hoverTypographyAccent = 'hover:text-indigo-600 dark:hover:text-indigo-400'

export const backgroundPrimary = 'bg-white dark:bg-slate-800'
export const backgroundPrimaryHover = 'hover:bg-slate-50 dark:hover:bg-slate-700'
export const backgroundSecondary = 'bg-slate-50 dark:bg-slate-700'

export const UIAccent = 'bg-indigo-600 dark:bg-indigo-500'
export const hoverUIAccent = 'hover:bg-indigo-700 dark:hover:bg-indigo-400'

export const strokeAccent = 'stroke-indigo-600 dark:stroke-indigo-400'

export const borderDefault = 'border-slate-300 dark:border-slate-50'
export const divideDefault = 'divide-slate-200 dark:divide-slate-800'

// SIZING
export const iconSize4 = 'h-4 w-4'
export const iconSize6 = 'h-6 w-6'

// LINKS
export const linkBase = `block rounded-md py-2 px-3 text-base font-medium no-underline`
export const linkPrimary = `${linkBase} ${typographyAccent}`
export const linkHeader = `${linkBase} ${typographySecondary}`
export const linkHeaderCurrent = `${linkBase} ${typographyAccent} font-medium`

// BADGE
export const badgePrimary = 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200'

// PROSE
export const proseBlog = `
mx-auto px-8 sm:px-6 max-w-3xl 
prose prose-lg lg:prose-xl

prose-p:text-slate-800
dark:prose-p:text-white

prose-headings:font-heading 
prose-headings:leading-tighter 
prose-headings:tracking-tighter 
prose-headings:font-bold 
prose-headings:text-slate-800
dark:prose-headings:text-white

prose-img:rounded-md 
prose-img:shadow-lg

prose-a:text-indigo-600
dark:prose-a:text-indigo-400
hover:prose-a:text-indigo-400

prose-em:text-slate-700
dark:prose-em:text-slate-400

prose-strong:text-indigo-700
dark:prose-strong:text-indigo-400

prose-li:text-slate-700
dark:prose-li:text-slate-400
prose-ul:list-inside 
prose-ol:list-inside 
prose-li:marker:text-indigo-600
dark: prose-li:marker:text-indigo-500

prose-blockquote:text-slate-500 
dark:prose-blockquote:text-slate-400
prose-blockquote:border-indigo-500
prose-blockquote:font-light

`


// `md:max-w-prose px-8 prose prose-headings:text-indigo-700
//                 prose-a:text-indigo-600 hover:prose-a:text-indigo-400
//                  prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-indigo-600
//                 prose-img:w-full prose-img:border prose-img:p-1
//                  `

