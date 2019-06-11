// var hugolunr = require('hugo-lunr');
// var h = new hugolunr();

var idx = null;
var resultDetails = [];
var $searchInput;
// var $headerSearch;

window.onload = function () {
  var request = new XMLHttpRequest();
  var query = '';

  $searchResultsRoot = document.getElementById("react-search-results-root");
 
  $searchResults = document.querySelector('.doc-search-results');
  $pageContent = document.getElementById("page-content");
  
  $searchInput   = document.querySelector('.dc-search-form__input');
//   $headerSearch  = document.getElementById('header-search');
  query          = (getParameterByName('q')) ? getParameterByName('q').trim() : '';
 
  request.overrideMimeType("application/json");
  request.open("GET", "/index.json", true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var documents = JSON.parse(request.responseText);
      idx = lunr(function () {
        this.ref('ref');
        this.field('title');
        this.field('excerpt');
        this.field('body');
        
        documents.forEach(function(doc) {
            this.add(doc);
            resultDetails[doc.ref] = {
              'title': doc.title,
              'excerpt': doc.excerpt,
            };
        }, this);
      });
      if (query != '') {
        $searchInput.value = query;
        // $headerSearch.value = query;
        renderSearchResults(search(query));
      }
    } else {
      $searchResultsRoot.innerHTML = 'Error loading search results';
    }
  };

  request.onerror = function() {
    $searchResultsRoot.innerHTML = 'Error loading search results';
  };

  request.send();
  registerSearchHandlers();
};

function getChar(event) {
  // event.which returns the key or mouse button clicked
  // Return the char if not a special character
  if (event.which === null) return String.fromCharCode(event.keyCode); // IE
  else if (event.which !== 0 && event.charCode !== 0) return String.fromCharCode(event.which); // Other Browsers    
  return null; // Special Key Clicked
}

function registerSearchHandlers() {
  
  document.body.onkeyup = function(event) {
    if( event.target.value.length == 0 ) {
      $searchResultsRoot.style.display = 'none';
      $searchResultsRoot.style.removeProperty('visibility');

      $pageContent.style.removeProperty('display');
      $pageContent.style.visibility = 'visible';
      
      return;
    } else if(event.target.value.length < 4) {
      return;
    } else {
      $searchResultsRoot.style.removeProperty('display');
      $searchResultsRoot.style.visibility = 'visible';
   
      $pageContent.style.removeProperty('visibility');
      $pageContent.style.display = 'none';
      var query = event.target.value;
      
      var results = search(query);
  
      renderSearchResults(results, query);
      if ($searchInput.value == '') {
        $searchResults.innerHTML = '';
      }
    }
  }
}


function search(query) {
  return idx.search(query);
}

function renderSearchResults(results, query) {
  // Create a list of results
  var resultDiv = document.createElement("div");
  var resultHeader = document.createElement("h1")
                      resultHeader.setAttribute('class', 'doc-search-results__title')
  var resultQuery = document.createElement("span")
  resultQuery.setAttribute('class', 'doc-search-results__title__query')
  resultQuery.innerHTML ='"' + query +'"'
  
  var ul = document.createElement('ul');
      ul.setAttribute('class', 'doc-search-results__list');

  if (results.length > 0) {
    if(results.length == 1 ){
      resultHeader.innerHTML = results.length + ' result for '
    } else {
      resultHeader.innerHTML = results.length + ' results for '
    }
   
    results.forEach(function(result) {
      // Create result item
      var li = document.createElement('li');
      li.setAttribute('class', 'doc-search-results__list__item');
      li.innerHTML = '<a class="doc-search-results__list__link" href="' 
                      + result.ref + '">' 
                      + resultDetails[result.ref].title 
                      + '</a><span class="doc-search-results__list__score-divider">|</span>'
                      + '<span class="doc-search-results__list__score">score: '
                      + result.score + '</span>'
                      + '<p class="dc-search-results_text">'
                      + resultDetails[result.ref].excerpt 
                      + '</p>';
      ul.appendChild(li);
    });

    // Remove any existing content
    while ($searchResultsRoot.hasChildNodes()) {
      $searchResultsRoot.removeChild(
        $searchResultsRoot.lastChild
      );
    }
  } else {
    // Remove any existing content
    while ($searchResultsRoot.hasChildNodes()) {
      $searchResultsRoot.removeChild(
        $searchResultsRoot.lastChild
      );
    }
    
    
    // var noResultText = document.createTextNode("No results for ")
    resultHeader.innerHTML = "No results for"
    
    // resultHeader.appendChild(noResultText)
    resultHeader.appendChild(resultQuery)
    resultDiv.appendChild(resultHeader)
    $searchResultsRoot.prepend(resultDiv)
  

  }

  // Render the list
  resultHeader.appendChild(resultQuery)
  resultDiv.appendChild(resultHeader)
  $searchResultsRoot.appendChild(resultDiv)
  $searchResultsRoot.appendChild(ul);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateQueryParam(query) {
  history.pushState('', '', '/search/?q=' + query);
}
