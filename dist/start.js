!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=require("tslib")},function(e,t){e.exports=require("tsyringe")},function(e,t){e.exports=require("reflect-metadata")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0);s.__exportStar(r(5),t),s.__exportStar(r(14),t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(13),{File:o,Console:n}=s.transports,i=s.createLogger({level:"info"});{const e=s.format.combine(s.format.timestamp(),s.format.json()),t=new o({filename:"./logs/error.log",format:e,level:"error"}),r=new o({filename:"./logs/combined.log",format:e});i.add(t),i.add(r)}t.logger=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(16),n=r(1);t.userListEvent=new o.EventEmitter;let i=class{constructor(){}presentUser(e){t.userListEvent.emit("user",e)}presentUserList(e){t.userListEvent.emit("userList",e)}};i=s.__decorate([n.injectable(),s.__metadata("design:paramtypes",[])],i),t.UserJsonEmitPresenter=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0);r(2);const o=s.__importDefault(r(8)),n=r(4),i=Number(process.env.PORT||3e3);o.default.listen(i,()=>{n.logger.info("Express server started on port: "+i)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=s.__importDefault(r(9)),n=s.__importDefault(r(3)),i=s.__importDefault(r(10)),u=s.__importDefault(r(11));r(2);const a=n.default();a.use(i.default("dev")),a.use(n.default.json()),a.use(n.default.urlencoded({extended:!0})),a.use(o.default()),a.use("/api",u.default),t.default=a},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("morgan")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(3),n=s.__importDefault(r(12)),i=o.Router();i.use("/users",n.default),t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(4),n=r(3),i=r(15),u=r(6);r(2);const a=r(17).userRestController,c=n.Router();c.get("/all",(e,t)=>{try{a.get(),u.userListEvent.once("userList",e=>t.send(e))}catch(e){o.logger.error(e.message,e),t.status(i.BAD_REQUEST).json({error:e.message})}}),c.post("/create",(e,t)=>{try{a.post(e),u.userListEvent.once("user",e=>t.send(e))}catch(e){o.logger.error(e.message,e),t.status(i.BAD_REQUEST).json({error:e.message})}}),c.put("/update",(e,t)=>s.__awaiter(void 0,void 0,void 0,(function*(){try{a.put(e),u.userListEvent.once("user",e=>t.send(e))}catch(e){o.logger.error(e.message,e),t.status(i.BAD_REQUEST).json({error:e.message})}}))),c.delete("/delete/:id",(e,t)=>s.__awaiter(void 0,void 0,void 0,(function*(){try{a.delete(e),u.userListEvent.once("user",e=>t.send(e))}catch(e){o.logger.error(e.message,e),t.status(i.BAD_REQUEST).json({error:e.message})}}))),t.default=c},function(e,t){e.exports=require("winston")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(5);t.paramMissingError="One or more of the required parameters was missing.",t.pErr=e=>{e&&s.logger.error(e)},t.getRandomInt=()=>Math.floor(1e12*Math.random())},function(e,t){e.exports=require("http-status-codes")},function(e,t){e.exports=require("events")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(2);const s=r(1),o=r(18),n=r(19),i=r(21),u=r(6);s.container.register("IUserUsecase",{useClass:n.UserInteractor}),s.container.register("IUserRepository",{useClass:i.UserOnMemoryRepository}),s.container.register("IUserPresenter",{useClass:u.UserJsonEmitPresenter}),t.userRestController=s.container.resolve(o.UserRestController)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(1);let n=class{constructor(e){this.userUsecase=e,this.userUsecase=e}get(){this.userUsecase.getAllUsers()}post(e){const{name:t,email:r}=e.body;this.userUsecase.createNewUser(t,r)}put(e){const{id:t,name:r,email:s}=e.body;if(!t)throw new Error("idがありません");this.userUsecase.updateUser(t,r,s)}delete(e){const t=Number(e.params.id);if(!t)throw new Error("idがありません");this.userUsecase.destroyUser(t)}};n=s.__decorate([o.injectable(),s.__param(0,o.inject("IUserUsecase")),s.__metadata("design:paramtypes",[Object])],n),t.UserRestController=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(20),n=r(1);let i=class{constructor(e,t){this.userRepository=e,this.outputPort=t,this.userRepository=e,this.outputPort=t}createNewUser(e,t){return s.__awaiter(this,void 0,void 0,(function*(){const r=new o.UserEntity(e,t);yield this.userRepository.create(r).catch(e=>{throw new Error("userRepository.create Exeption")}),this.outputPort.presentUser(r)}))}getAllUsers(){return s.__awaiter(this,void 0,void 0,(function*(){const e=yield this.userRepository.getAll();this.outputPort.presentUserList(e)}))}updateUser(e,t,r){return s.__awaiter(this,void 0,void 0,(function*(){const r=new o.UserEntity(t,t,e);yield this.userRepository.update(r),this.outputPort.presentUser(r)}))}destroyUser(e){return s.__awaiter(this,void 0,void 0,(function*(){const t=yield this._getUser(e);yield this.userRepository.delete(e),this.outputPort.presentUser(t)}))}_getUser(e){return this.userRepository.getUser(e).catch(e=>{throw new Error("userRepository.getUser Exeption")})}};i=s.__decorate([n.injectable(),s.__param(0,n.inject("IUserRepository")),s.__param(1,n.inject("IUserPresenter")),s.__metadata("design:paramtypes",[Object,Object])],i),t.UserInteractor=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UserEntity=class{constructor(e,t,r){this.name=e,this.email=t,this.id=r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=r(1);let n=class{constructor(){this.users=[{id:1,name:"one",email:"one@mail.com"},{id:2,name:"two",email:"two@mail.com"}]}create(e){return s.__awaiter(this,void 0,void 0,(function*(){const t=Object.assign(Object.assign({},e),{id:this.users.length+1});this.users.push(t)}))}getAll(){return s.__awaiter(this,void 0,void 0,(function*(){return this.users}))}getUser(e){return s.__awaiter(this,void 0,void 0,(function*(){return this.users.find(t=>t.id===e)||{}}))}update(e){return s.__awaiter(this,void 0,void 0,(function*(){const t=this.users.findIndex(t=>t.id==e.id);this.users[t]=e}))}delete(e){return s.__awaiter(this,void 0,void 0,(function*(){const t=this.users.findIndex(t=>t.id==e);this.users.splice(t,1)[0]}))}};n=s.__decorate([o.injectable(),s.__metadata("design:paramtypes",[])],n),t.UserOnMemoryRepository=n}]);