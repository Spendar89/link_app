(ns link-app.pages.link
    (:require [re-frame.core :as re-frame]))

(defn show []
  (let [link (re-frame/subscribe [:link])]
    (fn []
      [:div "This is the Link Page!!!!"
       [:div (str "Current Link: " @link)
        [:div [:a {:href "#/links"} "go to Links Page"]]]])))

(defn index []
  (fn []
    [:div "This is the Links Page."
     [:div [:a {:href "#/link"} "go to Link Page"]]]))
