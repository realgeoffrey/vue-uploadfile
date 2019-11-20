var vueUploadfile=function(){"use strict";var e=function(e,t,i,n,r,o,a,s,l,d){"boolean"!=typeof a&&(l=s,s=a,a=!1);var c,f="function"==typeof i?i.options:i;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),n&&(f._scopeId=n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},f._ssrRegister=c):t&&(c=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),c)if(f.functional){var u=f.render;f.render=function(e,t){return c.call(t),u(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,c):[c]}return i};const t={props:{accept:{type:String,default:""},maxSize:{type:Number,default:0},allowBlobUrl:{type:Boolean,default:!0},allowBase64:{type:Boolean,default:!0}},data:function(){return{file:"",blobUrl:"",base64:"",reader:Object.freeze({abort:function(){},removeEventListener:function(){}})}},beforeDestroy:function(){this.destroyReader()},methods:{change:function(e,t){this.destroyReader(),e?0===this.maxSize||e.size<=1048576*this.maxSize?this.allowBase64?(this.file=e,this.reader=new window.FileReader,this.reader.addEventListener("load",this.handleReaderLoad),this.reader.readAsDataURL(e)):this.update({file:e,blobUrl:this.allowBlobUrl?window.URL.createObjectURL(e):"",base64:""}):(t.value="",this.$emit("error",{msg:"上传文件过大（≈".concat((e.size/1048576).toFixed(1),"M），请上传").concat(this.maxSize,"M以下的图片")}),this.update()):this.update()},handleReaderLoad:function(e){this.update({file:this.file,blobUrl:this.allowBlobUrl?window.URL.createObjectURL(this.file):"",base64:e.target.result}),this.destroyReader()},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.file,i=void 0===t?"":t,n=e.blobUrl,r=void 0===n?"":n,o=e.base64,a=void 0===o?"":o;this.file=i,this.blobUrl=r,this.base64=a,this.$emit("update",{file:i,blobUrl:r,base64:a})},destroyReader:function(){this.reader.abort(),this.reader.removeEventListener("load",this.handleReaderLoad)}}};var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{on:{click:function(t){return e.$refs.inputDom.click()}}},[i("input",{ref:"inputDom",staticStyle:{display:"none"},attrs:{accept:e.accept,type:"file"},on:{change:function(t){return e.change(t.target.files[0],t.target)}}}),e._v(" "),e._t("default",[e._v("\n    "+e._s(e.file?e.file.name:"未选择任何文件")+"\n  ")],{base64:e.base64,blobUrl:e.blobUrl,file:e.file})],2)};i._withStripped=!0;var n=e({render:i,staticRenderFns:[]},void 0,t,void 0,!1,void 0,!1,void 0,void 0,void 0);return n.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.component||"vue-uploadfile",n)},n}();
