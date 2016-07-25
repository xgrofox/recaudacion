



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery-ajax-progress/jquery.ajax-progress.js at master · englercj/jquery-ajax-progress</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="englercj/jquery-ajax-progress" name="twitter:title" /><meta content="jquery-ajax-progress - Simple patch that adds a &#39;progress&#39; callback to jquery Ajax calls" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/944497?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/944497?v=3&amp;s=400" property="og:image" /><meta content="englercj/jquery-ajax-progress" property="og:title" /><meta content="https://github.com/englercj/jquery-ajax-progress" property="og:url" /><meta content="jquery-ajax-progress - Simple patch that adds a &#39;progress&#39; callback to jquery Ajax calls" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTE1MzU2OjYxOTZlOTEwYzFlOGYwY2ExOWZhMzE4OTg5MjBlOWM5OmMyYTFmNmViZmNjMWQ4MWNjNjAxZWVjYWMyMjViMzEwOWIwYTg0ZmY5YWY1OTI4MTI3OTg0NGNjZmI2NjM4OTU=--aca5e35bd03fcfa8c284a5493da0401ea6bb18c5">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="C825AB02:626B:A6C89E5:56953ECD" name="octolytics-dimension-request_id" /><meta content="115356" name="octolytics-actor-id" /><meta content="grofo" name="octolytics-actor-login" /><meta content="aee608c8e4f48f00ba1855803a61e658bb1a3b6e1503f725e612900477ae6307" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="grofo">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="338b16f95c640639552b919d7ce5d0fd95e66f7f" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2cd8e7b7c650541e94a142c9c10fb231b81455e1777c62510eb9b3402cc220b3.css" integrity="sha256-LNjnt8ZQVB6UoULJwQ+yMbgUVeF3fGJRDrmzQCzCILM=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-59f5919583cf2e70e57d04603053adbf07b93660733ba65df25454e92d209fe1.css" integrity="sha256-WfWRlYPPLnDlfQRgMFOtvwe5NmBzO6Zd8lRU6S0gn+E=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="056c86881be23af5cd8a809fecb37d38">

      
  <meta name="description" content="jquery-ajax-progress - Simple patch that adds a &#39;progress&#39; callback to jquery Ajax calls">
  <meta name="go-import" content="github.com/englercj/jquery-ajax-progress git https://github.com/englercj/jquery-ajax-progress.git">

  <meta content="944497" name="octolytics-dimension-user_id" /><meta content="englercj" name="octolytics-dimension-user_login" /><meta content="5905509" name="octolytics-dimension-repository_id" /><meta content="englercj/jquery-ajax-progress" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5905509" name="octolytics-dimension-repository_network_root_id" /><meta content="englercj/jquery-ajax-progress" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/englercj/jquery-ajax-progress/commits/master.atom" rel="alternate" title="Recent Commits to jquery-ajax-progress:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span aria-hidden="true" class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/englercj/jquery-ajax-progress/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:grofo"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span aria-hidden="true" class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span aria-hidden="true" class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="englercj/jquery-ajax-progress">This repository</span>
  </div>
    <a class="dropdown-item" href="/englercj/jquery-ajax-progress/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/grofo"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@grofo" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/115356?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">grofo</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/grofo" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lu+6achuH6/c3mBmySMWykHe12gaG5ONKHUetXk/HAtlVUussyqAsUtdJq66aamVGr+Jw4NwmxUtv5pf1OK99A==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SxThBzzaotnFoXfj8uFN/1uGQkFbpYDfeMIqStHFeZdzj6pYtzz2LcBBIL5bCr3dqNqPwaSAea+Fi42/vM+VCA==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="5905509" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/englercj/jquery-ajax-progress/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span aria-hidden="true" class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/englercj/jquery-ajax-progress/watchers">
            4
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span aria-hidden="true" class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dozqBo782zvPCxO99NgYnMjO8s+sz3vO7nM2OvcVWWu9hNsFi3KDvKJVrDccf8j/fLouyII4yQZCitbchEKIEg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar englercj/jquery-ajax-progress"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span aria-hidden="true" class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/englercj/jquery-ajax-progress/stargazers">
          74
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vRrwMy3f8g1dk5A42Eb4W6vIBHMuCGJqmlfdpaNKc9iJM93LpbjibumdP31UZNwgQ0TDWWwGB+V2G/DX3ryYuw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star englercj/jquery-ajax-progress"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span aria-hidden="true" class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/englercj/jquery-ajax-progress/stargazers">
          74
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/fork" class="btn-with-count" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OBvbV+F9mNCIxIoXx201+0dX+BDWaPygHk30+8gjT/iq/vlt3XZXq29NdPkQhVfbiamUJT+V305AJtka/xrB5A==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of englercj/jquery-ajax-progress to your account"
                aria-label="Fork your own copy of englercj/jquery-ajax-progress to your account">
              <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/englercj/jquery-ajax-progress/network" class="social-count">
      35
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/englercj" class="url fn" itemprop="url" rel="author"><span itemprop="title">englercj</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/englercj/jquery-ajax-progress" data-pjax="#js-repo-pjax-container">jquery-ajax-progress</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/englercj/jquery-ajax-progress" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /englercj/jquery-ajax-progress">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/englercj/jquery-ajax-progress/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /englercj/jquery-ajax-progress/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">1</span>
</a>
  <a href="/englercj/jquery-ajax-progress/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /englercj/jquery-ajax-progress/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">0</span>
</a>
    <a href="/englercj/jquery-ajax-progress/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /englercj/jquery-ajax-progress/wiki">
      <span aria-hidden="true" class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/englercj/jquery-ajax-progress/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /englercj/jquery-ajax-progress/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/englercj/jquery-ajax-progress/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /englercj/jquery-ajax-progress/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/englercj/jquery-ajax-progress/blob/5c4d2f2708b0971b6758ad4a01b333508ad3079d/js/jquery.ajax-progress.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:10e362bcc75591b6dc62c4ea65a1896d -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/englercj/jquery-ajax-progress/blob/master/js/jquery.ajax-progress.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/englercj/jquery-ajax-progress/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/englercj/jquery-ajax-progress" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jquery-ajax-progress</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/englercj/jquery-ajax-progress/tree/master/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.ajax-progress.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/englercj/jquery-ajax-progress/commit/446cc2658ed14f2443877f146870495e4940bcac" data-pjax>
          446cc26
        </a>
        <time datetime="2013-07-03T16:57:11Z" is="relative-time">Jul 3, 2013</time>
      </span>
      <div>
        <img alt="@RaphaelDDL" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1087109?v=3&amp;s=40" width="20" />
        <a href="/RaphaelDDL" class="user-mention" rel="contributor">RaphaelDDL</a>
          <a href="/englercj/jquery-ajax-progress/commit/446cc2658ed14f2443877f146870495e4940bcac" class="message" data-pjax="true" title="Update jquery.ajax-progress.js

Added check if is supported or not.">Update jquery.ajax-progress.js</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>3</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="RaphaelDDL" href="/englercj/jquery-ajax-progress/commits/master/js/jquery.ajax-progress.js?author=RaphaelDDL"><img alt="@RaphaelDDL" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1087109?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="snoj" href="/englercj/jquery-ajax-progress/commits/master/js/jquery.ajax-progress.js?author=snoj"><img alt="@snoj" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/391184?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="englercj" href="/englercj/jquery-ajax-progress/commits/master/js/jquery.ajax-progress.js?author=englercj"><img alt="@englercj" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/944497?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@RaphaelDDL" height="24" src="https://avatars3.githubusercontent.com/u/1087109?v=3&amp;s=48" width="24" />
            <a href="/RaphaelDDL">RaphaelDDL</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@snoj" height="24" src="https://avatars2.githubusercontent.com/u/391184?v=3&amp;s=48" width="24" />
            <a href="/snoj">snoj</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@englercj" height="24" src="https://avatars3.githubusercontent.com/u/944497?v=3&amp;s=48" width="24" />
            <a href="/englercj">englercj</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/englercj/jquery-ajax-progress/raw/master/js/jquery.ajax-progress.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/englercj/jquery-ajax-progress/blame/master/js/jquery.ajax-progress.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/englercj/jquery-ajax-progress/commits/master/js/jquery.ajax-progress.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/englercj/jquery-ajax-progress?branch=master&amp;filepath=js%2Fjquery.ajax-progress.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/edit/master/js/jquery.ajax-progress.js" class="inline-form js-update-url-with-hash" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1dK9jQNLh+zI3FjE7k9bF9GK1p4AimvS1kqM1fIXcg3RKInS8rqRbkRmYRhjJt40BPtxrSIDYtUuk6IuIG+7qQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span aria-hidden="true" class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/englercj/jquery-ajax-progress/delete/master/js/jquery.ajax-progress.js" class="inline-form" data-form-nonce="338b16f95c640639552b919d7ce5d0fd95e66f7f" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UZaXxJtTANzpR8gwJkdBauO82/5KCWiwTLmCELsFxb0XvDlHg0lVyBGwOBBz9Y9VKHlZM92WnHAELTE+IR1VaA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span aria-hidden="true" class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      25 lines (20 sloc)
      <span class="file-info-divider"></span>
    690 Bytes
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-smi">window</span>, <span class="pl-smi">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">//is onprogress supported by browser?</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hasOnProgress <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>onprogress<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> <span class="pl-smi">$</span>.<span class="pl-smi">ajaxSettings</span>.<span class="pl-en">xhr</span>());</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">//If not supported, do nothing</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>hasOnProgress) {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">//patch ajax settings to call a progress callback</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> oldXHR <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">ajaxSettings</span>.<span class="pl-smi">xhr</span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$.ajaxSettings</span>.<span class="pl-en">xhr</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xhr <span class="pl-k">=</span> <span class="pl-en">oldXHR</span>();</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(xhr <span class="pl-k">instanceof</span> <span class="pl-smi">window</span>.<span class="pl-smi">XMLHttpRequest</span>) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">xhr</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>progress<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">progress</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">xhr</span>.<span class="pl-smi">upload</span>) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">xhr</span>.<span class="pl-smi">upload</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>progress<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.<span class="pl-smi">progress</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xhr;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">})(jQuery, <span class="pl-c1">window</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.08563s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-EZvEsORh7UDNi4EQkE3lUPeIa8Au/SUQnfJ0Ayi65w0=" src="https://assets-cdn.github.com/assets/github-119bc4b0e461ed40cd8b8110904de550f7886bc02efd25109df2740328bae70d.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

