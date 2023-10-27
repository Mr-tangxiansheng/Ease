import { ElNotification } from "element-plus";

/**
 * @description 接收https，创建链接，下载文件
 * @param {Function} link https链接(必传)
 * @param {Boolean} isNotify 是否有导出消息提示(默认为 true)
 * @return void
 * */
export const useHttpsDownload = async (link, isNotify: boolean = true) => {
	if (isNotify) {
		ElNotification({
      title: "温馨提示",
      message: "如果数据庞大会导致下载缓慢哦，请您耐心等待！",
      type: "info",
      duration: 3000
    });
	}
	try {
		const exportFile = document.createElement("a");
		exportFile.href = link
		document.body.appendChild(exportFile);
		exportFile.click();
		document.body.removeChild(exportFile);
	} catch (error) {
		console.log(error);
	}
};