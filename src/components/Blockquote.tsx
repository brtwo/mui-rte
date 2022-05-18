import React from 'react'
import { withStyles } from 'tss-react/mui';
import { assert } from 'tsafe/assert';

interface IBlockquoteProps {
    children?: React.ReactNode;
    classes?: Partial<Record<"root", string>>;
}

const Blockquote = (props: IBlockquoteProps) => {
    const { classes, children } = props;
    assert(classes !== undefined);
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};


export default withStyles(Blockquote,
    theme => ({
        root: {
            fontStyle: "italic",
            color: theme.palette.grey[800],
            borderLeft: `4px solid ${theme.palette.grey.A100}`
        }
    })
);

