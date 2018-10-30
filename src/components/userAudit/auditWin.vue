<template>
    <el-dialog title="详情" :visible.sync="auditWinVisible" width="50%">
        <!-- <div   v-if="applicationContent.content.message.oldMsg==''"> -->
            <el-form :label-position="labelPosition" label-width="80px">
                <div v-for="(value, key) in applicationContent.content.message.newMsg" v-if="key!='pwd'" v-bind:key="key">
                    <el-form-item :label="key">
                        <el-input :value="value" disabled="true"></el-input>
                    </el-form-item>
                </div>
            </el-form>
        <!-- </div> -->

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
                labelPosition: "right"
            }
        },
        computed: {
            ...mapState(['auditWinVisible', 'applicationContent']),
        },
        methods: {
            ...mapMutations(['setauditWinVisible']),
            ok() {
                this.setauditWinVisible(false);
            },
            cancel() {
                this.setauditWinVisible(false);
            }
        }
    }
</script>