import { ElNotification } from "element-plus";

/**
 * @description 接收数据流生成blob，创建链接，下载文件
 * @param {Function} api 导出表格的api方法(必传)
 * @param {Object} params 导出的参数(默认为空对象)
 * @param {Boolean} isNotify 是否有导出消息提示(默认为 true)
 * @return void
 * */
export const useDownload = async (api: (param: any) => Promise<any>, params: any = {}, isNotify: boolean = true) => {
	if (isNotify) {
		ElNotification({
			title: "温馨提示",
			message: "如果数据庞大会导致下载缓慢哦，请您耐心等待！",
			duration: 3000
		});
	}
	try {
		const res = await api(params);
		const blob = new Blob([res.data[0]]);
		// 兼容 edge 不支持 createObjectURL 方法
		if ("msSaveOrOpenBlob" in navigator) return window.navigator.msSaveOrOpenBlob(blob);
		const blobUrl = window.URL.createObjectURL(blob);
		const exportFile = document.createElement("a");
		exportFile.style.display = "none";
		const name = res.data[1].split("filename*=utf-8''")[1];
		exportFile.download = decodeURIComponent(name);
		exportFile.href = blobUrl;
		document.body.appendChild(exportFile);
		exportFile.click();
		// 去除下载对 url 的影响
		document.body.removeChild(exportFile);
		window.URL.revokeObjectURL(blobUrl);
	} catch (error) {
		console.log(error);
	}
};
