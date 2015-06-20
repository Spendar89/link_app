(ns link-app.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [link-app.handlers]
              [link-app.subs]
              [link-app.routes :as routes]
              [link-app.views :as views]))

(defn mount-app-layout []
  (reagent/render [views/app-layout]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-app-layout))
