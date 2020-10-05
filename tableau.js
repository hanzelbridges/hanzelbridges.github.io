// JavaScript Document
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/SuperStoreDataAnalysisMaponly/SuperStoreDataAnalysis2?:language=en&:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}