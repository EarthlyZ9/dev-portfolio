import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { Base64 } from 'js-base64';
import React, { useState, useEffect } from 'react';
import { createTokenAuth } from '@octokit/auth-token';
import remarkGFM from 'remark-gfm';
import { request } from '@octokit/request';
import classes from './Project.module.css';
import Title from '../UI/Title';
import SpaceGemRedirect from './SpaceGemRedirect';
import projectData from '../../data/projectData';

const Project = (props) => {
    const params = useParams();
    const projectName = params.pid;
    const filename = projectData.filter((p) => p.path === projectName)[0]
        .filename;

    const onBackButtonEvent = (e) => {
        e.preventDefault();
        window.history.back();
    };

    useEffect(() => {
        history.pushState(null, '', location.href);
        window.addEventListener('popstate', onBackButtonEvent);

        return () => {
            window.removeEventListener('popstate', onBackButtonEvent);
        };
    }, []);

    const [mdFile, setMdFile] = useState(``);

    useEffect(() => {
        const getMd = async () => {
            const auth = createTokenAuth(
                process.env.REACT_APP_GITHUB_ACCESS_TOKEN
            );
            const authentication = await auth();
            const response = await request(
                'GET /repos/{owner}/{repo}/contents/{path}',
                {
                    owner: 'linda2927',
                    repo: 'projects',
                    path: filename,
                    headers: authentication.headers,
                }
            ).catch((error) => console.log(error));
            setMdFile(Base64.decode(response.data.content));
        };
        getMd();
    }, []);

    return (
        <div className={classes.wrapper}>
            <Title title={'Projects'} className={classes.title} />
            <ReactMarkdown
                children={mdFile}
                remarkPlugins={[remarkGFM]}
                components={{
                    p: ({ node, ...props }) => {
                        // <img />를 렌더링 하는 경우에 <p>내부에서 렌더링 되지 않도록 하기 위함
                        // if (node.children[0].tagName === 'img') {
                        //     const image = node.children[0];
                        //     return (
                        //         <img
                        //             src={image.properties.src}
                        //             width="768"
                        //             height="432"
                        //             alt={image.properties.alt}
                        //         />
                        //     );
                        // }
                        if (typeof props.children[0] === 'object') {
                            const element = props.children[0];
                            if (element.props.alt === 'logo') {
                                return (
                                    <img
                                        style={{ width: '50%' }}
                                        src={element.props.src}
                                        alt="logo"
                                    />
                                );
                            }
                            if (element.props.alt === 'video') {
                                return (
                                    <img
                                        style={{ width: '100%' }}
                                        src={element.props.src}
                                        alt={'video'}
                                    />
                                );
                            }
                            if (element.props.href) {
                                return element;
                            }
                            return element.type.name === 'img' ? (
                                { ...element }
                            ) : (
                                <p {...props} className="whitespace-pre-line" />
                            );
                        }
                        return <p {...props} className="whitespace-pre-line" />;
                    },
                    a: ({ node, ...props }) => {
                        if (props.children[0] === '깃헙 레포 바로가기') {
                            return <a {...props} className="markdown-a-link" />;
                        } else {
                            return <a {...props} className="markdown-a-link" />;
                        }
                    },
                    h1: ({ node, ...props }) => {
                        return <h1 {...props} className="markdown-h1-tag" />;
                    },
                    ul: ({ node, ...props }) => {
                        return <ul {...props} className="markdown-ul-tag" />;
                    },
                }}
            />
            {projectName === 'space-gem' && <SpaceGemRedirect />}
        </div>
    );
};

export default Project;
