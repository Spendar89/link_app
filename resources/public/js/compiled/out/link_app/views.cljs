(ns link-app.views
    (:require [re-frame.core :as re-frame]
              [link-app.pages.links :as links]))

(defn page-not-found []
  [:div "Im a default page!!!! :)"])

(defmulti pages identity)
(defmethod pages :links/show [] [links/show])
(defmethod pages :links/index [] [links/index])
(defmethod pages :default [] [page-not-found])

(defn app-layout []
  (let [current-page (re-frame/subscribe [:current-page])]
    (fn []
      (pages @current-page))))
