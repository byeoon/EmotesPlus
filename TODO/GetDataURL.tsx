// Originally from Stealmoji made by FieryFlames 

export default function fetchImage(url: string, callback: any) {
	fetch(url).then((resp) => {
		resp.blob().then((blob) => {
			const reader = new FileReader();
			reader.readAsDataURL(blob)
			reader.onloadend = () => {
				callback(reader.result)
			}
		})
	})
}