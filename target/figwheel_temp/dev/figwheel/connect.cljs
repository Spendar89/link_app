(ns figwheel.connect (:require [link-app.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/link-app.core.mount-root (apply js/link-app.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'link-app.core/mount-root' is missing"))), :build-id "dev"})

