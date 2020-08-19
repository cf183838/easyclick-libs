/**
 * 参数1:待执行边缘检测的图片,类型 Mat
 * 参数2:二值化的下界
 * 参数3:二值化的上界
 * 返回值:待输出的图片,类型 Mat
 * @Param Canny 中文Canny边缘算子
 */
function Canny(image,threshold1,threshold2){
    importPackage(org.opencv.core)
    importPackage(org.opencv.android)
    importPackage(org.opencv.imgproc)
    var ret = new Mat();
    Imgproc.Canny(image,ret,threshold1,threshold2)
    return ret
}

/**
 * 参数1:文件名(含路径),类型 String
 * 返回值:待输出的图片,类型 Mat
 * @Param Imread 中文读取图片
 */

function Imread(filename){
    let ret = new Mat()
    ret = Imgcodecs.imread(filename)
    return ret
}
