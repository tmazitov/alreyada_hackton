function navigate(pageId: string) {
	const page = document.getElementById(pageId);
	if (!page)
		return

	const pageRect = page.getBoundingClientRect();
	scrollTo({
		top: pageRect.top,
		behavior: 'smooth'
	});
}
export default navigate;