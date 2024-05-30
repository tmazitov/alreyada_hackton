function navigate(pageId: string) {
	const page = document.getElementById(pageId);
	if (!page)
		return

	const pageRect = page.getBoundingClientRect();
	scrollTo({
		top: pageRect.top + window.scrollY - 40,
		behavior: 'smooth'
	});
}
export default navigate;