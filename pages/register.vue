<script lang="ts" setup>
import type { FormValidationError, FormItemRule } from "naive-ui"
// import { sha256 } from "js-sha256"
import { ArrowBackCircle } from "@vicons/ionicons5"

// 使用的Layous
definePageMeta({
    layout: "login-register"
})

// 注册表单
interface RegisterForm {
    account: string,
    email: string,
    emailVerification: string,
    password: string,
    confirmPassword: string,
    verification: string
}
const registerForm: RegisterForm = reactive({
    account: "",
    email: "",
    emailVerification: "",
    password: "",
    confirmPassword: "",
    verification: ""
})
const rules = reactive({
    account: { required: true, message: "请输入用户名", trigger: "blur" },
    email: { required: true, message: "请输入邮箱", trigger: "blur" },
    emailVerification: { required: true, message: "请输入邮箱验证码", trigger: "blur" },
    password: { required: true, message: "请输入密码", trigger: "blur" },
    confirmPassword: [
        { required: true, message: "请确认密码", trigger: "blur" },
        {
            required: true,
            validator(rule: FormItemRule, value: string) {
                console.log(rule) // TODO
                if (value === registerForm.password) {
                    return true
                }
                return new Error("重复密码不一致")
            },
            trigger: ["input", "blur"]
        }
    ],
    verification: { required: true, message: "请输入验证码", trigger: "blur" }
})

// 注册
const registerFormRef = ref()
const handleRegister = () => {
    registerFormRef.value?.validate((res: Array<FormValidationError>) => {
        if (!res) {
            console.log("11111")
            // console.log(sha256("111"))
        }
    })
}

</script>

<template>
    <div class="page">
        <div class="left" />
        <div class="right">
            <ClientOnly>
                <div class="form-box">
                    <div class="title">注册</div>
                    <n-form ref="registerFormRef" :label-width="80" :model="registerForm" :rules="rules">
                        <n-form-item label="用户名" path="account">
                            <n-input v-model:value="registerForm.account" placeholder="请输入用户名" />
                        </n-form-item>
                        <n-form-item :show-label="false" :show-feedback="false">
                            <n-grid :cols="2" :x-gap="24">
                                <n-form-item-gi label="邮箱" path="email">
                                    <n-input v-model:value="registerForm.email" placeholder="请输入邮箱" />
                                </n-form-item-gi>
                                <n-form-item-gi label="邮箱验证码" path="emailVerification">
                                    <n-input v-model:value="registerForm.emailVerification" placeholder="请输入邮箱验证码" />
                                </n-form-item-gi>
                            </n-grid>
                        </n-form-item>
                        <n-form-item label="密码" path="password">
                            <n-input v-model:value="registerForm.password" type="password" show-password-on="mousedown"
                                placeholder="请输入密码" />
                        </n-form-item>
                        <n-form-item label="确认密码" path="confirmPassword" :first="true">
                            <n-input v-model:value="registerForm.confirmPassword" type="password"
                                show-password-on="mousedown" placeholder="请确认密码" />
                        </n-form-item>
                        <n-form-item label="验证码" path="verification">
                            <n-input v-model:value="registerForm.verification" placeholder="请输入验证码" />
                            <img class="verification-img" src="/assets/temp/boat-8614314_1280.jpg" alt="">
                            <span class="replace">换一张</span>
                        </n-form-item>
                    </n-form>
                    <div class="register-btn" @click="handleRegister">注册</div>
                    <div class="back">
                        <div @click="navigateTo('/login')">
                            <n-icon :component="ArrowBackCircle" />
                            返回登录
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<style lang="scss" scope>
.page {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url(/assets/temp/boat-8614314_1280.jpg);
    background-size: cover;
    background-position: center;
}

.left {
    flex: 1;
}

.right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-box {
    width: 400px;
    padding: 20px 30px;
    border-radius: 16px;
    background-color: #FFF;

    .title {
        font-size: 2.8rem;
        letter-spacing: .6rem;
        margin-bottom: 20px;
        text-align: center;
    }

    .verification-img {
        width: 140px;
        height: 34px;
        margin: 0 10px;
    }

    .replace {
        cursor: pointer;
        font-size: 1.4rem;
        width: 100px;
    }

    .register-btn {
        font-size: 2.4rem;
        letter-spacing: 8px;
        text-align: center;
        border-radius: 4px;
        color: #FFF;
        padding: 6px 0;
        cursor: pointer;
        background-color: getColor(main-color);

        &:hover {
            filter: saturate(1.4);
        }
    }

    .back {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 1.4rem;

        &>div {
            display: flex;
            gap: 4px;
            cursor: pointer;
        }

        .n-icon {
            font-size: 2rem;
        }
    }
}
</style>
