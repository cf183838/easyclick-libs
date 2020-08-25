/**
 * 参数1:待执行边缘检测的图片,类型 Mat
 * 参数2:待输出的图片,类型Mat
 * 参数3:二值化的下界
 * 参数4:二值化的上界
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

这个不太会用,好像还要审核,欢迎大家访问:
https://gitee.com/cf183838/ec-opencv/tree/master/
会有例子什么在里面,欢迎大家关注.
