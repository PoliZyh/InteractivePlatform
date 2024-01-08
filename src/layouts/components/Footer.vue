<template>
    <div class="footer-box">
        <div class="top">
            <div class="row-item">
                <h4>指导单位</h4>
                <p>浙江省互联网信息办公室</p>
                <p>浙江省经济和信息化厅</p>
                <p>浙江省公安厅</p>
                <p>浙江省发展和改革委员会</p>
                <p>浙江省通信管理局</p>
            </div>
            <div class="row-item">
                <h4>主办单位</h4>
                <p>杭州市人民政府</p>
            </div>
            <div class="row-item">
                <h4>联合主办单位</h4>
                <p>中国信息通信研究院</p>
                <p>中国网络空间研究院</p>
                <p>国家工业信息安全发展研究中心</p>
                <p>中国电子技术标准化研究院</p>
                <p>工业和信息化部教育与考试中心</p>
                <p>杭州市滨江区人民政府</p>
            </div>
            <div class="row-item">
                <h4>承办单位</h4>
                <p>杭州市互联网信息办公室</p>
                <p>杭州市经济和信息化局</p>
                <p>杭州市公安局</p>
                <p>杭州市发展和改革委员会</p>
                <p>浙江省网络空间安全协会</p>
                <p>安恒信息</p>
            </div>
            <div class="row-item">
                <h4>战略合作媒体</h4>
                <p>新华网</p>
            </div>
            <div class="row-item">
                <h4>特别支持媒体</h4>
                <p>光明网</p>
            </div>
        </div>
        <div class="bottom">
            <div class="b-l">
                <img src="https://www.gcsis.cn/img/logo_bottom.png" alt="">
                <p>隐私协议 / 服务条款</p>
            </div>
            <div class="b-m">
                <nav>
                    <p>首页</p>
                    <p>大会议程</p>
                    <p>精彩活动</p>
                    <p>展商风采</p>
                    <p>成果展示</p>
                    <p>媒体中心</p>
                    <p>大会直播</p>
                </nav>
                <div> © 杭州安恒信息技术股份有限公司 浙ICP备09102757号-28 浙公网安备 33010802009170号</div>
            </div>
            <div class="b-r">
                <img src="https://img2023.gcsis.cn/2023/4/792c55535d6144fe874fc309b07d3ac9.jpg" alt="">
                <p>扫码进入小程序</p>
            </div>
        </div>
    </div>
</template>



<script setup>
</script>


<style scoped lang="scss">
.footer-box {
    width: 100%;
    background: url('https://www.gcsis.cn/img/bottom_bg.jpg');
    background-size: cover;
    padding: .6667rem;
    min-height: calc(100vh - $layout-header-height);
    color: white;
    .top {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: .6667rem;
        padding-top: 1rem;
        padding-bottom: 1.8rem;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        .row-item {
            width: 22%;
            h4 {
                font-size: .35rem;
                margin-bottom: .3333rem;
            }
            p {
                font-size: .25rem;
                line-height: 1.8;
                font-size: .20rem;
            }
        }
    }
    .bottom {
        width: 80%;
        margin: .8333rem auto 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .6667rem;
        .b-l {
            img {
                height: 0.7rem;
            }
            font-size: .1667rem;
            p {
                text-align: center;
                margin-top: .3333rem;
            }
        }
        .b-m {
            padding-top: .3333rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            nav {
                display: flex;
                font-size: .19rem;
                gap: .1667rem;
            }
            div {
                font-size: .1667rem;
                margin-top: .3333rem;
            }
        }
        .b-r {
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: .2rem;
            gap: .1667rem;
            padding: .3167rem;
            border: .0007rem solid rgba(249, 249, 249, 0.231);
            img {
                height: 1.6667rem;
            }
        }
    }
}
</style>