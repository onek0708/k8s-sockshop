(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(s,e,n){s.exports=n.p+"assets/img/github_edit.75aa25a3.png"},212:function(s,e,n){s.exports=n.p+"assets/img/tekton_dashboard.a8059dcc.png"},213:function(s,e,n){s.exports=n.p+"assets/img/new_sockshop.30272ba1.png"},220:function(s,e,n){"use strict";n.r(e);var t=n(0),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sockshop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sockshop","aria-hidden":"true"}},[s._v("#")]),s._v(" Sockshop")]),s._v(" "),t("p",[s._v("Sockshop Architecture:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/microservices-demo/microservices-demo.github.io/raw/40d8170161d2f81cc6524f8aa137c8e9f9131ecd/assets/Architecture.png",alt:"Sockshop Architecture",title:"Sockshop Architecture"}})]),s._v(" "),t("p",[s._v("Deploy Sockshop:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("envsubst "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" files/flux-repository/namespaces/sockshop.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tmp/k8s-flux-repository/namespaces/sockshop.yaml\nenvsubst "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" files/flux-repository/workloads/sockshop.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tmp/k8s-flux-repository/workloads/sockshop.yaml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --verbose "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sockshop added"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])])]),t("p",[s._v("Check the commit and open the "),t("code",[s._v("index.html")]),s._v(" in the web browser:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -x /usr/bin/chromium-browser "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  chromium-browser "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://github.com/ruzickap/k8s-flux-repository/commits/master "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://github.com/ruzickap/k8s-flux-repository/blob/master/workloads/sockshop.yaml"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#L201-L337 \\")]),s._v("\n    https://github.com/ruzickap/front-end/edit/master/public/index.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("Open few tabs in web browser:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -x /usr/bin/falkon "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  falkon "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://sockshop.'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n  falkon "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://tekton-dashboard.'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v('/#/pipelineruns"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n  falkon "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://kiali.'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v('/console/graph/namespaces/?edges=requestsPercentage&graphType=app&namespaces=sock-shop&unusedNodes=false&injectServiceNodes=true&pi=15000&duration=60&layout=dagre"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("The application should be ready. Verify the canary deployment details:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl describe canaries.flagger.app -n sock-shop\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Name:         sockshop\nNamespace:    sock-shop\nLabels:       fluxcd.io/sync-gc-mark=sha256.mR4DMU8yLyj9zNqHpNn1gLLyzpxGA6Bi83LM0mcrWK4\nAnnotations:  fluxcd.io/sync-checksum: d76bc80bde7011788b9a03cb0d8c15303de6ed0a\n              kubectl.kubernetes.io/last-applied-configuration:\n                {"apiVersion":"flagger.app/v1alpha3","kind":"Canary","metadata":{"annotations":{"fluxcd.io/sync-checksum":"d76bc80bde7011788b9a03cb0d8c153...\nAPI Version:  flagger.app/v1alpha3\nKind:         Canary\nMetadata:\n  Creation Timestamp:  2019-09-30T11:52:51Z\n  Generation:          1\n  Resource Version:    6303\n  Self Link:           /apis/flagger.app/v1alpha3/namespaces/sock-shop/canaries/sockshop\n  UID:                 d4cbde0d-e378-11e9-aa18-424f651a3093\nSpec:\n  Canary Analysis:\n    Interval:    10s\n    Max Weight:  50\n    Metrics:\n      Interval:               1m\n      Name:                   request-success-rate\n      Threshold:              99\n      Interval:               30s\n      Name:                   request-duration\n      Threshold:              500\n    Step Weight:              5\n    Threshold:                10\n  Progress Deadline Seconds:  60\n  Provider:                   istio\n  Service:\n    Gateways:\n      sockshop-gateway\n    Hosts:\n      sockshop.myexample.dev\n    Port:            8079\n    Port Discovery:  false\n    Port Name:       http\n  Target Ref:\n    API Version:  apps/v1\n    Kind:         Deployment\n    Name:         front-end\nStatus:\n  Canary Weight:  0\n  Conditions:\n    Last Transition Time:  2019-09-30T11:56:02Z\n    Last Update Time:      2019-09-30T11:56:02Z\n    Message:               Deployment initialization completed.\n    Reason:                Initialized\n    Status:                True\n    Type:                  Promoted\n  Failed Checks:           0\n  Iterations:              0\n  Last Applied Spec:       1708531587231322986\n  Last Transition Time:    2019-09-30T11:56:02Z\n  Phase:                   Initialized\n  Tracked Configs:\nEvents:\n  Type     Reason  Age                   From     Message\n  ----     ------  ----                  ----     -------\n  Warning  Synced  91s (x19 over 4m31s)  flagger  Halt advancement front-end-primary.sock-shop waiting for rollout to finish: 0 of 1 updated replicas are available\n  Normal   Synced  81s                   flagger  Initialization done! sockshop.sock-shop\n')])])]),t("p",[s._v("The original deployment "),t("code",[s._v("front-end")]),s._v(" doesn't have any pods now and new deployment\n"),t("code",[s._v("front-end-primary")]),s._v(" was created by Flagger which takes care about the traffic:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get deployment -n sock-shop\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("NAME                READY   UP-TO-DATE   AVAILABLE   AGE\ncarts               1/1     1            1           5m2s\ncarts-db            1/1     1            1           5m2s\ncatalogue           1/1     1            1           5m2s\ncatalogue-db        1/1     1            1           5m2s\nfront-end           0/0     0            0           5m2s\nfront-end-primary   1/1     1            1           4m59s\norders              1/1     1            1           5m1s\norders-db           1/1     1            1           5m1s\npayment             1/1     1            1           5m1s\nqueue-master        1/1     1            1           5m1s\nrabbitmq            1/1     1            1           5m1s\nshipping            1/1     1            1           5m1s\nuser                1/1     1            1           5m1s\nuser-db             1/1     1            1           5m1s\n")])])]),t("p",[s._v("There are three new services created by Flagger - "),t("code",[s._v("front-end-canary")]),s._v("\nand "),t("code",[s._v("front-end-primary")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get services -n sock-shop\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("NAME                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE\ncarts               ClusterIP   10.0.189.70    <none>        80/TCP      5m30s\ncarts-db            ClusterIP   10.0.106.236   <none>        27017/TCP   5m30s\ncatalogue           ClusterIP   10.0.105.32    <none>        80/TCP      5m30s\ncatalogue-db        ClusterIP   10.0.161.107   <none>        3306/TCP    5m30s\nfront-end           ClusterIP   10.0.222.203   <none>        8079/TCP    5m27s\nfront-end-canary    ClusterIP   10.0.53.222    <none>        8079/TCP    5m27s\nfront-end-primary   ClusterIP   10.0.252.82    <none>        8079/TCP    5m27s\norders              ClusterIP   10.0.215.69    <none>        80/TCP      5m30s\norders-db           ClusterIP   10.0.228.160   <none>        27017/TCP   5m30s\npayment             ClusterIP   10.0.250.84    <none>        80/TCP      5m30s\nqueue-master        ClusterIP   10.0.110.68    <none>        80/TCP      5m30s\nrabbitmq            ClusterIP   10.0.163.62    <none>        5672/TCP    5m30s\nshipping            ClusterIP   10.0.182.48    <none>        80/TCP      5m30s\nuser                ClusterIP   10.0.185.203   <none>        80/TCP      5m30s\nuser-db             ClusterIP   10.0.247.233   <none>        27017/TCP   5m30s\n")])])]),t("p",[s._v("There is also new "),t("code",[s._v("VirtualService")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl describe virtualservices.networking.istio.io -n sock-shop\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Name:         front-end\nNamespace:    sock-shop\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  networking.istio.io/v1alpha3\nKind:         VirtualService\nMetadata:\n  Creation Timestamp:  2019-09-30T11:52:52Z\n  Generation:          1\n  Owner References:\n    API Version:           flagger.app/v1alpha3\n    Block Owner Deletion:  true\n    Controller:            true\n    Kind:                  Canary\n    Name:                  sockshop\n    UID:                   d4cbde0d-e378-11e9-aa18-424f651a3093\n  Resource Version:        5607\n  Self Link:               /apis/networking.istio.io/v1alpha3/namespaces/sock-shop/virtualservices/front-end\n  UID:                     d5672ea8-e378-11e9-aa18-424f651a3093\nSpec:\n  Gateways:\n    sockshop-gateway\n  Hosts:\n    sockshop.myexample.dev\n    front-end\n  Http:\n    Route:\n      Destination:\n        Host:  front-end-primary\n      Weight:  100\n      Destination:\n        Host:  front-end-canary\n      Weight:  0\nEvents:        <none>\n")])])]),t("p",[s._v("You can also see two new "),t("code",[s._v("DestinationRules")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl describe destinationrules.networking.istio.io -n sock-shop\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Name:         front-end-canary\nNamespace:    sock-shop\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  networking.istio.io/v1alpha3\nKind:         DestinationRule\nMetadata:\n  Creation Timestamp:  2019-09-30T11:52:52Z\n  Generation:          1\n  Owner References:\n    API Version:           flagger.app/v1alpha3\n    Block Owner Deletion:  true\n    Controller:            true\n    Kind:                  Canary\n    Name:                  sockshop\n    UID:                   d4cbde0d-e378-11e9-aa18-424f651a3093\n  Resource Version:        5597\n  Self Link:               /apis/networking.istio.io/v1alpha3/namespaces/sock-shop/destinationrules/front-end-canary\n  UID:                     d54c17cb-e378-11e9-aa18-424f651a3093\nSpec:\n  Host:  front-end-canary\nEvents:  <none>\n\n\nName:         front-end-primary\nNamespace:    sock-shop\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  networking.istio.io/v1alpha3\nKind:         DestinationRule\nMetadata:\n  Creation Timestamp:  2019-09-30T11:52:52Z\n  Generation:          1\n  Owner References:\n    API Version:           flagger.app/v1alpha3\n    Block Owner Deletion:  true\n    Controller:            true\n    Kind:                  Canary\n    Name:                  sockshop\n    UID:                   d4cbde0d-e378-11e9-aa18-424f651a3093\n  Resource Version:        5598\n  Self Link:               /apis/networking.istio.io/v1alpha3/namespaces/sock-shop/destinationrules/front-end-primary\n  UID:                     d556273d-e378-11e9-aa18-424f651a3093\nSpec:\n  Host:  front-end-primary\nEvents:  <none>\n")])])]),t("p",[s._v("Modify the "),t("a",{attrs:{href:"https://github.com/ruzickap/front-end/edit/master/public/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/ruzickap/front-end/edit/master/public/index.html"),t("OutboundLink")],1),s._v('\nand replace "We love socks!" by "We really love socks!".')]),s._v(" "),t("p",[t("img",{attrs:{src:n(211),alt:"GitHub edit",title:"GitHub edit"}})]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Initiate build of a new container:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/podinfo-build-docker-image-from-git-pipelinerun/podinfo-build-docker-image-from-git-pipelinerun-2/"')]),s._v(" tmp/k8s-flux-repository/workloads/tekton-pipelinerun.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tmp/k8s-flux-repository/workloads/tekton-pipelinerun-2.yaml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/0.3.12/0.4.0/"')]),s._v(" tmp/k8s-flux-repository/workloads/tekton-pipelineresource.yaml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --verbose "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Start building the front-end container"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])])]),t("p",[s._v("Open the Tekton Dashboard page "),t("a",{attrs:{href:"https://tekton-dashboard.myexample.dev",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://tekton-dashboard.myexample.dev"),t("OutboundLink")],1),s._v("\nto see the build process.")]),s._v(" "),t("p",[s._v("You should see a new PipelineRun:")]),s._v(" "),t("p",[t("img",{attrs:{src:n(212),alt:"New PipelineRun",title:"New PipelineRun"}})]),s._v(" "),t("p",[s._v("Run tmux session with monitoring commands:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tmux new-session "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsend-keys "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\n  while true ; do\n  fluxctl list-images -n sock-shop --workload sock-shop:deployment/front-end ;\n  sleep 5 ;\n  done\n"')]),s._v(" C-m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsplit-window -h -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsend-keys "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do kubectl get -n sock-shop canary/sockshop -o json | jq .status; sleep 2; done"')]),s._v(" C-m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsplit-window -v -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsend-keys "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do kubectl -n sock-shop get canaries sockshop; sleep 3; done"')]),s._v(" C-m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nselect-pane -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsplit-window -v -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsend-keys "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl -n istio-system logs deployment/flagger -f | jq .msg"')]),s._v(" C-m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsplit-window -h -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nsend-keys "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do curl -sk https://sockshop.'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v("/ | sed -n "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("s@.*>\\(We.*socks\\!\\)<.*@"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("@p"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('; sleep 2; done"')]),s._v(" C-m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nset-option status off\n")])])]),t("p",[s._v("New version of Sockshop:")]),s._v(" "),t("p",[t("img",{attrs:{src:n(213),alt:"New Sockshop",title:"New Sockshop"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);