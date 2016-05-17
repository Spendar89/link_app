(ns link-app.core
  (:require 
    [weasel.repl.websocket :as weasel]
    [net.cgrand.enlive-html :as html]
    [cemerick.piggieback :as piggieback]))

(defn test-fn [arg] 
  (prn arg))

(def ^:dynamic *base-url* "https://news.ycombinator.com/")

(defn fetch-url  [url]
  (html/html-resource  (java.net.URL. url)))

(fetch-url "http://grantland.com/the-triangle/mind-mapping-sleepers-and-rim-protection-a-2015-nba-draft-primer/")

(defn url-links [url]
  (map html (html/select (fetch-url url) [:a])))

(url-links "http://grantland.com/the-triangle/mind-mapping-sleepers-and-rim-protection-a-2015-nba-draft-primer/")

(defn hn-headlines  []
  (map html/text  (html/select  (fetch-url *base-url*)  [:td.title :a])))

(defn hn-points  []
  (map html/text  (html/select  (fetch-url *base-url*)  [:td.subtext html/first-child])))

(defn print-headlines-and-points  []
  (doseq  [line  (map #(str %1 " (" %2 ")")  (hn-headlines)  (hn-points))]
    (println line)))
