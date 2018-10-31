<template>
    <el-dialog title="详情" :visible.sync="auditWinVisible" @update:visible="cancel" width="50%">
        <!-- //新增用户审核窗口 -->
        <div v-if="applicationContent.content.type=='add'" class="newMsg">
            <el-tag type="success" class="sucTag">新增用户信息</el-tag>
            <el-form :label-position="rightPosition" label-width="80px">
                <div class="addInput" v-for="(value, key) in applicationContent.content.message.newMsg" v-if="key!='pwd'&&key!='passed'&&key!='privilege'"
                    v-bind:key="key">
                    <el-form-item :label="key">
                        <el-input :value="value" disabled></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <!-- //修改用户信息窗口 -->
        <div v-if="applicationContent.content.type=='update'" class="updateWin">
            <el-form :label-position="rightPosition" label-width="80px">
                <el-tag type="danger" class="sucTag">用户原信息</el-tag>
                <div v-for="(value, key) in applicationContent.content.message.oldMsg" v-if="key!='pwd'&&key!='passed'&&key!='privilege'"
                    v-bind:key="key">
                    <el-form-item :label="key">
                        <el-input :value="value" disabled></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <el-form :label-position="rightPosition" label-width="80px">
                <el-tag class="sucTag">用户新信息</el-tag>
                <div v-for="(value, key) in applicationContent.content.message.newMsg" v-if="key!='pwd'&&key!='passed'&&key!='privilege'"
                    v-bind:key="key">
                    <el-form-item :label="key">
                        <el-input :value="value" disabled></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div>
            <label for="">审核结果：</label>
            <template>
                <el-radio v-model="radio" label="1">通过</el-radio>
                <el-radio v-model="radio" label="-1">不通过</el-radio>
            </template>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="ok">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import {
        createNamespacedHelpers
    } from 'vuex';
    const {
        mapState,
        mapActions,
        mapMutations
    } = createNamespacedHelpers('UserAudit');
    export default {
        data() {
            return {
                rightPosition: "right",
                radio: '1'
            }
        },
        computed: {
            ...mapState(['auditWinVisible', 'applicationContent', ]),
        },
        methods: {
            ...mapMutations(['setauditWinVisible']),
            ...mapActions(['updateApplication', 'updateUserPassed', 'addOwners']),
            ok() {
                this.setauditWinVisible(false);
                this.applicationContent.passed = this.radio;
                this.applicationContent.handle = "1";
                this.updateApplication({
                    id: this.applicationContent._id,
                    handle: "1",
                    passed: this.radio
                }); //修改application集合状态
                this.updateUserPassed({
                    id: this.applicationContent.content.workId,
                    passed: this.radio
                }); //修改user用户passed
                if (this.applicationContent.content.type == "add" && this.radio == "1") {
                    this.addOwners({
                        id: this.applicationContent.content.workId
                    });
                } else if (this.applicationContent.content.type == "update" && this.radio == "1") {
                    this.updateUserPassed({
                        id: this.applicationContent.content.workId,
                        newMsg:this. applicationContent.content.message.newMsg
                    })
                }
            },
            cancel() {
                this.setauditWinVisible(false);
            }
        }
    }
</script>

<style scoped>
    .updateWin {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: auto;
    }

    .newMsg {
        text-align: left;
    }

    .sucTag {
        margin-left: 80px;
        margin-bottom: 10px;
    }

    .addInput {
        width: 600px;
    }
</style>