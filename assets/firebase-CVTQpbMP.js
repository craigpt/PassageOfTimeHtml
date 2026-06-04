import{r as y,_ as b,C as T,a as S,E as K,o as we,F as W,L as Ie,g as D,i as ye,b as be,v as Te,c as q,d as Ae,e as ve,f as Se,h as ke}from"./index-xGOGrF_I.js";var Ee="firebase",Ce="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */y(Ee,Ce,"app");const Y="@firebase/installations",F="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=1e4,X=`w:${F}`,Z="FIS_v2",Re="https://firebaseinstallations.googleapis.com/v1",Pe=60*60*1e3,_e="installations",De="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},h=new K(_e,De,Fe);function Q(e){return e instanceof W&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee({projectId:e}){return`${Re}/projects/${e}/installations`}function te(e){return{token:e.token,requestStatus:2,expiresIn:$e(e.expiresIn),creationTime:Date.now()}}async function ne(e,t){const a=(await t.json()).error;return h.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function ae({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Me(e,{refreshToken:t}){const n=ae(e);return n.append("Authorization",Oe(t)),n}async function ie(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $e(e){return Number(e.replace("s","000"))}function Oe(e){return`${Z} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=ee(e),i=ae(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Z,appId:e.appId,sdkVersion:X},r={method:"POST",headers:i,body:JSON.stringify(o)},c=await ie(()=>fetch(a,r));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:te(l.authToken)}}else throw await ne("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=/^[cdef][\w-]{21}$/,_="";function Le(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=je(e);return qe.test(n)?n:_}catch{return _}}function je(e){return xe(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map;function oe(e,t){const n=k(e);ce(n,t),Be(n,t)}function ce(e,t){const n=re.get(e);if(n)for(const a of n)a(t)}function Be(e,t){const n=Ue();n&&n.postMessage({key:e,fid:t}),Ve()}let g=null;function Ue(){return!g&&"BroadcastChannel"in self&&(g=new BroadcastChannel("[Firebase] FID Change"),g.onmessage=e=>{ce(e.data.key,e.data.fid)}),g}function Ve(){re.size===0&&g&&(g.close(),g=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="firebase-installations-database",Ge=1,m="firebase-installations-store";let C=null;function M(){return C||(C=we(ze,Ge,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(m)}}})),C}async function A(e,t){const n=k(e),i=(await M()).transaction(m,"readwrite"),s=i.objectStore(m),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&oe(e,t.fid),t}async function le(e){const t=k(e),a=(await M()).transaction(m,"readwrite");await a.objectStore(m).delete(t),await a.done}async function E(e,t){const n=k(e),i=(await M()).transaction(m,"readwrite"),s=i.objectStore(m),o=await s.get(n),r=t(o);return r===void 0?await s.delete(n):await s.put(r,n),await i.done,r&&(!o||o.fid!==r.fid)&&oe(e,r.fid),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){let t;const n=await E(e.appConfig,a=>{const i=He(a),s=Ke(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===_?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function He(e){const t=e||{fid:Le(),registrationStatus:0};return ue(t)}function Ke(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(h.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=We(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ye(e)}:{installationEntry:t}}async function We(e,t){try{const n=await Ne(e,t);return A(e.appConfig,n)}catch(n){throw Q(n)&&n.customData.serverCode===409?await le(e.appConfig):await A(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ye(e){let t=await L(e.appConfig);for(;t.registrationStatus===1;)await se(100),t=await L(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await $(e);return a||n}return t}function L(e){return E(e,t=>{if(!t)throw h.create("installation-not-found");return ue(t)})}function ue(e){return Je(e)?{fid:e.fid,registrationStatus:0}:e}function Je(e){return e.registrationStatus===1&&e.registrationTime+J<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe({appConfig:e,heartbeatServiceProvider:t},n){const a=Ze(e,n),i=Me(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:X,appId:e.appId}},r={method:"POST",headers:i,body:JSON.stringify(o)},c=await ie(()=>fetch(a,r));if(c.ok){const l=await c.json();return te(l)}else throw await ne("Generate Auth Token",c)}function Ze(e,{fid:t}){return`${ee(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O(e,t=!1){let n;const a=await E(e.appConfig,s=>{if(!de(s))throw h.create("not-registered");const o=s.authToken;if(!t&&tt(o))return s;if(o.requestStatus===1)return n=Qe(e,t),s;{if(!navigator.onLine)throw h.create("app-offline");const r=at(s);return n=et(e,r),r}});return n?await n:a.authToken}async function Qe(e,t){let n=await j(e.appConfig);for(;n.authToken.requestStatus===1;)await se(100),n=await j(e.appConfig);const a=n.authToken;return a.requestStatus===0?O(e,t):a}function j(e){return E(e,t=>{if(!de(t))throw h.create("not-registered");const n=t.authToken;return it(n)?{...t,authToken:{requestStatus:0}}:t})}async function et(e,t){try{const n=await Xe(e,t),a={...t,authToken:n};return await A(e.appConfig,a),n}catch(n){if(Q(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await le(e.appConfig);else{const a={...t,authToken:{requestStatus:0}};await A(e.appConfig,a)}throw n}}function de(e){return e!==void 0&&e.registrationStatus===2}function tt(e){return e.requestStatus===2&&!nt(e)}function nt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pe}function at(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function it(e){return e.requestStatus===1&&e.requestTime+J<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e){const t=e,{installationEntry:n,registrationPromise:a}=await $(t);return a?a.catch(console.error):O(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t=!1){const n=e;return await ot(n),(await O(n,t)).token}async function ot(e){const{registrationPromise:t}=await $(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){if(!e||!e.options)throw R("App Configuration");if(!e.name)throw R("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw R(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function R(e){return h.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="installations",lt="installations-internal",ut=e=>{const t=e.getProvider("app").getImmediate(),n=ct(t),a=S(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},dt=e=>{const t=e.getProvider("app").getImmediate(),n=S(t,fe).getImmediate();return{getId:()=>st(n),getToken:i=>rt(n,i)}};function ft(){b(new T(fe,ut,"PUBLIC")),b(new T(lt,dt,"PRIVATE"))}ft();y(Y,F);y(Y,F,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="analytics",pt="firebase_id",gt="origin",ht=60*1e3,mt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",N="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new Ie("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new K("analytics","Analytics",wt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){if(!e.startsWith(N)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function pe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function yt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function bt(e,t){const n=yt("firebase-js-sdk-policy",{createScriptURL:It}),a=document.createElement("script"),i=`${N}?l=${e}&id=${t}`;a.src=n?n?.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function Tt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function At(e,t,n,a,i,s){const o=a[i];try{if(o)await t[o];else{const c=(await pe(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(r){u.error(r)}e("config",i,s)}async function vt(e,t,n,a,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const r=await pe(n);for(const c of o){const l=r.find(w=>w.measurementId===c),f=l&&t[l.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,i||{})}catch(s){u.error(s)}}function St(e,t,n,a){async function i(s,...o){try{if(s==="event"){const[r,c]=o;await vt(e,t,n,r,c)}else if(s==="config"){const[r,c]=o;await At(e,t,n,a,r,c)}else if(s==="consent"){const[r,c]=o;e("consent",r,c)}else if(s==="get"){const[r,c,l]=o;e("get",r,c,l)}else if(s==="set"){const[r]=o;e("set",r)}else e(s,...o)}catch(r){u.error(r)}}return i}function kt(e,t,n,a,i){let s=function(...o){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=St(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Et(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(N)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=30,Rt=1e3;class Pt{constructor(t={},n=Rt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ge=new Pt;function _t(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Dt(e){const{appId:t,apiKey:n}=e,a={method:"GET",headers:_t(n)},i=mt.replace("{app-id}",t),s=await fetch(i,a);if(s.status!==200&&s.status!==304){let o="";try{const r=await s.json();r.error?.message&&(o=r.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Ft(e,t=ge,n){const{appId:a,apiKey:i,measurementId:s}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:a};throw d.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new Ot;return setTimeout(async()=>{r.abort()},ht),he({appId:a,apiKey:i,measurementId:s},o,r,t)}async function he(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=ge){const{appId:s,measurementId:o}=e;try{await Mt(a,t)}catch(r){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${r?.message}]`),{appId:s,measurementId:o};throw r}try{const r=await Dt(e);return i.deleteThrottleMetadata(s),r}catch(r){const c=r;if(!$t(c)){if(i.deleteThrottleMetadata(s),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw r}const l=Number(c?.customData?.httpStatus)===503?q(n,i.intervalMillis,Ct):q(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,f),u.debug(`Calling attemptFetch again in ${l} millis`),he(e,f,a,i)}}function Mt(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $t(e){if(!(e instanceof W)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ot{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Nt(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const s=await t,o={...a,send_to:s};e("event",n,o)}}async function xt(e,t,n,a){if(a&&a.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(){if(be())try{await Te()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lt(e,t,n,a,i,s,o){const r=Ft(e);r.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>u.error(p)),t.push(r);const c=qt().then(p=>{if(p)return a.getId()}),[l,f]=await Promise.all([r,c]);Et(s)||bt(s,l.measurementId),i("js",new Date);const w=o?.config??{};return w[gt]="firebase",w.update=!0,f!=null&&(w[pt]=f),i("config",l.measurementId,w),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.app=t}_delete(){return delete I[this.app.options.appId],Promise.resolve()}}let I={},B=[];const U={};let P="dataLayer",Bt="gtag",V,x,z=!1;function Ut(){const e=[];if(ye()&&e.push("This is a browser extension environment."),Se()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Vt(e,t,n){Ut();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(I[a]!=null)throw d.create("already-exists",{id:a});if(!z){Tt(P);const{wrappedGtag:s,gtagCore:o}=kt(I,B,U,P,Bt);x=s,V=o,z=!0}return I[a]=Lt(e,B,U,t,V,P,n),new jt(e)}function zt(e=Ae()){e=D(e);const t=S(e,v);return t.isInitialized()?t.getImmediate():Gt(e)}function Gt(e,t={}){const n=S(e,v);if(n.isInitialized()){const i=n.getImmediate();if(ve(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}function Ht(e,t,n){e=D(e),xt(x,I[e.app.options.appId],t,n).catch(a=>u.error(a))}function me(e,t,n,a){e=D(e),Nt(x,I[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const G="@firebase/analytics",H="0.10.19";function Kt(){b(new T(v,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Vt(a,i,n)},"PUBLIC")),b(new T("analytics-internal",e,"PRIVATE")),y(G,H),y(G,H,"esm2020");function e(t){try{const n=t.getProvider(v).getImmediate();return{logEvent:(a,i,s)=>me(n,a,i,s),setUserProperties:(a,i)=>Ht(n,a,i)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}Kt();const Wt={apiKey:"AIzaSyDi1hjUuD96k_7XqRS1IZBZ2hsiy7teWHs",authDomain:"passageoftime-a89f5.firebaseapp.com",projectId:"passageoftime-a89f5",storageBucket:"passageoftime-a89f5.firebasestorage.app",messagingSenderId:"559358186552",appId:"1:559358186552:web:c472566f3a9cf8a8cb82cd"},Xt=ke(Wt),Yt=zt();me(Yt,"app_loaded");export{Xt as default};
