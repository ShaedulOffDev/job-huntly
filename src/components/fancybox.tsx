"use client"
import { useRef, useEffect, PropsWithChildren } from 'react';
import Fancybox from "@fancyapps/ui"
import NativeFancyBox from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Props {
  options?: Partial<OptionsType>;
  delegate?: string;
}

function FancyboxWrapper(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    // NativeFancyBox.bind(container, delegate, options);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default FancyboxWrapper;