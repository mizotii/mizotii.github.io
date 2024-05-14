<script>
    import { Router, Link, Route } from 'svelte-routing';
    import ToggleTheme from './lib/ToggleTheme.svelte';

    // pages
    import Contact from './lib/Contact.svelte';
    import Home from './lib/Home.svelte';

    // projects
    import Project from './lib/Project.svelte';
    import Development from './lib/projects/Development.svelte';
    import Japanese from './lib/projects/Japanese.svelte';
    import Baseball from './lib/projects/Baseball.svelte';
    import English from './lib/projects/English.svelte';

    export let url = '';
</script>

<Router {url}>
    <nav>
        <ul class='menu bg-base-200 w-56 rounded-box'>
            <li>
                <h2 class='menu-title'>joel's homepage</h2>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li>
                        <details open>
                            <summary>projects...</summary>
                            <ul>
                                <li><Link to='/projects/dev'>as a developer</Link></li>
                                <li><Link to='/projects/japanese'>as a Japanese translator</Link></li>
                                <li><Link to='/projects/baseball'>as a baseball researcher</Link></li>
                                <li><Link to='/projects/english'>as an English student</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div>
        <Route path='/projects/:type' component={Project} let:params>
            <Project type='{params.type}' />
        </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
    </div>
</Router>

<main>
    <footer>
        <toggle>
            <ToggleTheme />
        </toggle>
    </footer>
</main>

<style>
    nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    footer {
        position: absolute;
        width: 100%;
        height: 48px;
        bottom: 0px;
    }

    toggle {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
