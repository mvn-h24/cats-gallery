import {Directive} from "nuxt/dist/app/compat/capi";

const obsName = 'intersection-observer';

function getObserver(cb): [HTMLDivElement, IntersectionObserver] {
    const el = document.createElement('div');
    el.style.width = '0';
    el.style.height = '0';
    el.classList.add(obsName);
    const observer = (new IntersectionObserver(
        function (entries: Array<IntersectionObserverEntry>) {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    cb();
                }
            })
        }, {
            threshold: 1
        }
    ));
    return [el, observer];
}

export const ScrollAfter: Directive<HTMLElement> = {
    mounted(el, binding) {
        const [observerEl, observer] = getObserver(binding.value)
        el['observer'] = observer
        el.appendChild(observerEl);
        el['observer'].observe(observerEl);
    },
    beforeUnmount(el) {
        el.getElementsByClassName(obsName)[0]?.remove()
        el['observer']?.disconnect()
        el['observer'] = undefined
    },
}