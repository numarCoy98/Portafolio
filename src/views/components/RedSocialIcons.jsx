const redSocialIcons = [
    { key: 1, name: 'linkedin', classNameIcon: 'bx bxl-linkedin', url: 'https://www.linkedin.com/in/stiven-coy/' },
    { key: 2, name: 'github', classNameIcon: 'bx bxl-github', url: 'https://github.com/numarCoy98' },
    { key: 3, name: 'instagram', classNameIcon: 'bx bxl-instagram', url: 'https://www.instagram.com/numarcoy3/' }
]

export const RedSocialIcons = () => {
    return redSocialIcons.map(({ classNameIcon, url, key }) =>
        (<a target='_blank' key={key} href={url} className="mr-2"><i className={classNameIcon}></i></a>)
    )
}
