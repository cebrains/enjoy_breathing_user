<template>
    <div class="inquiry-pay">
        <div class="top-bar">支付</div>
        <div class="container">
            <info-bar :info="info">
                <span class="label">¥39</span>
            </info-bar>
            <ul class="list">
                <li class="item flex space-between">
                    <span>优惠方式</span>
                    <p class="flex picker">
                        <span class="non-value">无可用优惠券</span>
                        <span class="icon"></span>
                    </p>
                </li>
                <li class="item flex space-between">
                    <span>回复问题</span>
                    <p class="flex">
                        <span class="non-value">超过24小时未回复自动退款</span>
                        <!-- <span class="icon"></span> -->
                    </p>
                </li>
                <li class="item flex flex-column">
                    <div class="item-title flex space-between">
                        <span>公开问题</span>
                        <cube-switch v-model="value"></cube-switch>
                    </div>
                    <p class="tips">帮助更多人，您的姓名头像会匿名处理，每次查看完你将获得0.5元奖励。</p>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="btn-item">
                <p class="total">合计： <span class="price">¥39</span></p>
                <p class="tips">可免费追问一次</p>
            </div>
            <div class="pay-btn btn-item flex flex-center">立即支付</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                name: '罗辑',
                role: '主治医师',
                hospital: '郑州大学第一附属医院'
            },
            value: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.inquiry-pay {
    height: 100vh;
    background: #f4f4f4;
    .label {
        position: absolute;
        right: 1rem;
        color: #fe3737;
    }
    .list {
        margin-top: .4rem;
        background-color: #fff;
        .item {
            padding: .6rem 1rem;
            border-bottom: 1px solid #e0e0e0;
            .item-title {
                width: 100%;
                padding-bottom: .6rem;
            }
            .tips, .non-value {
                color: #a3a3a3;
                font-size: 0.8rem;
            }
            .picker {
                span {
                    line-height: 1;
                }
            }
            .icon {
                display: inline-block;
                width: 1rem;
                height: 1.3rem;
                background: url('../../../assets/images/arrow_right.png') no-repeat center center;
                background-size: cover;
            }
        }
    }
    .footer {
        padding: 0;
        .btn-item {
            flex: 1;
            height: 100%;
        }
        .tips {
            font-size: 0.8rem;
            color: #a3a3a3;
        }
        .total {
            font-size: 0.9rem;
            color: #585858;
            .price {
                color: #ff4e52;
                font-size: 1.1rem;
            }
        }
        .pay-btn {
            background-color: #ff4e52;
            font-size: .9rem;
            color: #fff;
        }
    }
}
</style>

