(ns link-app.handlers
  (:require [re-frame.core :as re-frame]
            [link-app.db :as db]))

(re-frame/register-handler
  :initialize-db
  (fn  [_ _]
    db/default-db))

(re-frame/register-handler
  :set-current-page
  (fn [db [_ current-page]]
    (assoc db :current-page current-page)))


(re-frame/register-handler
  :set-link-id
  (fn [db [_ link-id]]
    (assoc db :link-id link-id)))
