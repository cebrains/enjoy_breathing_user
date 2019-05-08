<template>
    <div class="to-inquiry">
        <div class="top-bar">我要问诊</div>
        <div class="container">
            <p class="title">请选择咨询方式</p>
            <ul class="list">
                <li class="item flex" @click="$router.push('/inquiry/inquiryMode')">
                    <img class="img" src="@/assets/images/picture.png" alt="">
                    <div class="content flex space-between align-start">
                        <div>
                            <p>图文问诊</p>
                            <p>使用图文，语音与医生沟通</p>
                        </div>
                        <span class="price">20元/次</span>
                    </div>
                </li>
                <li class="item flex" @click="$router.push({path: '/inquiry/inquiryMode', query: {mode: 'voice'}})">
                    <img class="img" src="@/assets/images/picture.png" alt="">
                    <div class="content flex space-between align-start">
                        <div>
                            <p>语音问诊</p>
                            <p>3小时快速问诊，15分钟通话时间</p>
                        </div>
                        <span class="price">69元/次</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.to-inquiry {
    background: #f8f9fd;
    .top-bar {
        box-shadow: 0rem 0.1rem 0rem 0rem 
		rgba(122, 122, 122, 0.14);
    }
    .container {
        padding: 1rem;
    }
    .title {
        line-height: 1.1rem;
        color: #585858;
    }
    .list {
        .item {
            box-shadow: 0rem 0.1rem 0.5rem 0rem rgba(122, 122, 122, 0.14);
	        border-radius: 0.2rem;
            background: #fff;
            padding: 1rem 0;
            margin-top: .6rem;
            .img {
                height: 1.5rem;
                max-width: 1.6rem;
                margin: .8rem;
            }
            .content {
                width: 100%;
                padding-right: 1rem;
                p {
                    color: #383838;
                    &:last-child {
                        font-size: 0.9rem;
                        color: #8d8d8d;
                        margin-top: .4rem;
                    }
                }
            }
            .price {
                color: #ff4444;
                font-size: 0.9rem;
            }
        }
    }
}
</style>
