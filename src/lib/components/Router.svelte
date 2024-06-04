<script>
    import { Router, Link, Route } from 'svelte-routing';
    import ToggleTheme from "./ToggleTheme.svelte";
    import Footer from '../components/Footer.svelte';

    // pages
    import Page from '../components/Page.svelte';
    import Contact from '../pages/Contact.svelte';
    import Home from '../pages/Home.svelte';

    // projects
    import Development from '../pages/Development.svelte';
    import English from '../pages/English.svelte';
    import Japanese from '../pages/Japanese.svelte';

    export let url = '';
</script>

<Router {url}>
    <nav>
        <ul class='menu bg-base-200 w-56 rounded-box'>
            <li>
                <h2 class='menu-title'>joel's profile</h2>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li>
                        <details open>
                            <summary>projects...</summary>
                            <ul>
                                <li><Link to='/dev'>as a developer</Link></li>
                                <li><Link to='/japanese'>as a Japanese translator</Link></li>
                                <li><Link to='/english'>as an English student</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to='/contact'>contact</Link></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div>
        <Route path='/dev' component={Development} />
        <Route path='/english' component={English} />
        <Route path='/japanese' component={Japanese} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
    </div>
</Router>

<style>
    nav {
        position: flex;
        margin: 24px;
    }
</style>