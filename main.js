載入.onclick = async () => {
	await (new Promise((res, rej) => {
		輸入.onload = res;
		輸入.onerror = rej;
		輸入.src = blob2url(檔案選擇.files[0]);
	}));
	輸出.width = 輸入.naturalWidth;
	輸出.height = 輸入.naturalHeight;
	let ctx = 輸出.getContext('2d');
	ctx.drawImage(輸入, 0, 0);
};
逆時針.onclick = () => {
	輸出.width = 輸入.naturalHeight;
	輸出.height = 輸入.naturalWidth;
	let ctx = 輸出.getContext('2d');
	ctx.rotate(-Math.PI / 2);
	ctx.drawImage(輸入, -輸入.naturalWidth, 0);
};
轉半圈.onclick = () => {
	輸出.width = 輸入.naturalWidth;
	輸出.height = 輸入.naturalHeight;
	let ctx = 輸出.getContext('2d');
	ctx.rotate(Math.PI);
	ctx.drawImage(輸入, -輸入.naturalWidth, -輸入.naturalHeight);
};
順時針.onclick = () => {
	輸出.width = 輸入.naturalHeight;
	輸出.height = 輸入.naturalWidth;
	let ctx = 輸出.getContext('2d');
	ctx.rotate(Math.PI / 2);
	ctx.drawImage(輸入, 0, -輸入.naturalHeight);
};
下載.onclick = async () => {


	startDownload(await (new Promise((res, rej) => 輸出.toBlob((blob) => res(blob2url(blob))))), 'img');
};