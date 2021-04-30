function changeOuterLinks() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.innerHTML.includes('outer-link')) {
            link.target = '_blank';
            link.innerHTML = `<strong>${link.innerHTML}</strong>`;
        }
    });
    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.width = '30%';
    nav.style.margin = '0 auto';
    nav.style.border = '1px solid blue';
    nav.style.padding = '16px';
}
changeOuterLinks()

export { changeOuterLinks };